import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import ReelScreen from './src/Screens/ReelScreen/ReelScreen';

const App = () => {

  // only two fonts are used
  // both fonts font weight is same everywhere; except noto sans 700 is for button at the bottom
  // fonts, icons, images are downloaded in assers/fonts
  // do proper styling then optimizing the styling code at the end
  // for eg font family/size/weight and colors/backgroundcolor, etc

  // kebab menu

  return (
    <SafeAreaView>
        <ReelScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
