{-# LANGUAGE OverloadedStrings #-}

module Home (homePage) where

import           Data.Text
import           Lucid

homePage :: Html ()
homePage = do
  doctype_
  "\n"
  html_ [ lang_ "en" ] $ do
    "\n  "
    head_ $ do
      "\n    "
      meta_ [ charset_ "utf-8" ]
      "\n    "
      meta_ [ name_ "viewport", content_ "width=device-width, initial-scale=1, shrink-to-fit=no" ]
      "\n    "
      meta_ [ name_ "theme-color", content_ "#000000" ]
      "\n    "
      link_ [ rel_ "manifest", href_ "manifest.json" ]
      "\n    "
      link_ [ rel_ "shortcut icon", href_ "/images/favicon.ico" ]
      "\n    "
      link_ [ rel_ "stylesheet", href_ "/assets/Home.bundle.css" ]
      "\n    "
      title_ "React Haskell App"
      "\n  "
    "\n  "
    body_ $ do
      "\n    "
      div_ [ id_ "root" ] ""
      "\n    "
      script_ [ src_ "/assets/Home.bundle.js" ] (""::Text)
      "\n  "
    "\n"
  "\n"
