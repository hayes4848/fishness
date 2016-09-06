// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.saxton.fish',
  name: 'FishIndex',
  description: 'Fish Index was created and develped to help people better express the levels of fish smell one might encounter each day. Fish Index has a pretty straight forwward user experience, if you smell something fishy, you simply get out your phone and "vote" for what level best matches. This app is great for people working on boats, in harbors, or even your occasional marketing creative.',
  author: 'Andrew Hayes',
  email: 'andythemanhayes@hotmail.com',
  website: 'http://example.com',
  version: '1.1'
});
// Set up resources such as icons and launch screens.
App.icons({
  'iphone_2x': 'public/PNGs/icon120.png',
  'iphone_3x': 'public/PNGs/icon180.png',
  'ios_settings': 'public/PNGs/icon29.png',
  'ios_settings_2x': 'public/PNGs/icon58.png',
  'ios_settings_3x': 'public/PNGs/icon87.png',
  'ios_spotlight': 'public/PNGs/icon40.png',
  'ios_spotlight_2x': 'public/PNGs/icon80.png',
  'android_mdpi': 'public/PNGs/icon48.png',
  'android_hdpi': 'public/PNGs/icon72.png',
  'android_xhdpi': 'public/PNGs/icon96.png',
  'android_xxhdpi': 'public/PNGs/icon144.png',
  'android_xxxhdpi': 'public/PNGs/icon192.png',
});
App.launchScreens({
  'iphone6': 'public/fish/fish_background.png',
  'iphone_2x': 'public/fish/fish_background640x960.png',
  'iphone6p_portrait': 'public/fish/fish_background1242x2208.png',
  'android_mdpi_portrait': 'public/fish/fish_background320x470.png',
  'android_hdpi_portrait': 'public/fish/fish_background480x640.png',
  'android_xhdpi_portrait': 'public/fish/fish_background720x960.png',
  'android_xxhdpi_portrait': 'public/fish/fish_background1080x1440.png',
});
