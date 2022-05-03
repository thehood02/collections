import React from 'react'
import { StyleSheet, ImageBackground, View } from 'react-native'

import Header from './Header/Header'
import Products from './Products/Products'

const ReelScreen = () => {
  return (
      <ImageBackground source={require('../../../assets/images/girl.jpg')} style={styles.backgroundImage}>
        <View style={styles.sectionContainer}>
            <Header />
            <Products />
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%'
  },
  sectionContainer: {
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
})

export default ReelScreen