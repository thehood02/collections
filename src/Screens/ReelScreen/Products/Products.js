import React from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'

import NotoSansMedium from '../../../CustomComponents/NotoSansMedium'
import Collection from './Collection'

const Products = () => {
  return (
    <View style={styles.productsContainer}>
      <View
        style={{
          position: 'absolute',
          top: -18,
          width: 125,
          height: 10,
          backgroundColor: "#fff",
          borderRadius: 10
        }}
      ></View>
        <View style={styles.products}>
          <ScrollView
            style={{
              paddingBottom: 20
            }}
          >
            {/* will use map() to iterate through collections to show each collection */}
            <Collection />
            <Collection />
            <Collection />

            {/* this will be one component only, maybe in that component, i will have two components, or not, depends... */}
            {/* collections view */}
            {/*TODO: pass a prop which will say whether to show detail screen or not (true/false) and in TouchableOpacity add an onPress function which will change its value*/}
            {/* Collection dtails view */} 
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <NotoSansMedium style={styles.buttonText}>Add all to cart</NotoSansMedium>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    productsContainer: {
        height: "50%",
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        paddingLeft: 27,
        paddingTop: 15
    },
    products: {
      height: "100%",
      width: "100%"
    },
    addButton: {
      position: 'absolute',
      bottom: 50,
      width: '95%',
      backgroundColor: '#015DD3',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12,
      borderRadius: 10
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontFamily: 'NotoSans-Medium'
    }
})

export default Products