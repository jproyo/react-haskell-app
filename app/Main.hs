module Main where

import           Web.Spock
import           Web.Spock.Config

import           Control.Monad.Trans
import           Data.IORef
import           Data.Monoid
import qualified Data.Text                     as T
import           Home                          (homePage)
import           Network.Wai.Middleware.Static
import           Web.Spock.Lucid               (lucid)

data MySession = EmptySession
data MyAppState = DummyAppState (IORef Int)

main :: IO ()
main =
    do ref <- newIORef 0
       spockCfg <- defaultSpockCfg EmptySession PCNoDatabase (DummyAppState ref)
       runSpock 8080 (spock spockCfg app)

app :: SpockM () MySession MyAppState ()
app =
    do middleware $ staticPolicy (addBase "public")
       get root $ lucid homePage
       get ("hello" <//> var) $ \name ->
           do (DummyAppState ref) <- getState
              visitorNumber <- liftIO $ atomicModifyIORef' ref $ \i -> (i+1, i+1)
              text ("Hello " <> name <> ", you are visitor number " <> T.pack (show visitorNumber))
