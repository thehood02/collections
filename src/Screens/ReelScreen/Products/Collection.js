import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'

import DidactGothicRegular from '../../../CustomComponents/DidactGothicRegular'
import Product from './Product'

import Uncheck from '../../../../assets/icons/circle_check_outline.svg'
import Checked from '../../../../assets/icons/circle_check.svg'
import DownArrow from '../../../../assets/icons/chevron_big_down.svg'

const Collection = () => {

    const [addToCart, setAddToCart] = useState(false);
    const [showCollectionDetails, setShowCollectionDetails] = useState(false);

  return (
    <>
        <View style={styles.collectionContainer}>
            <DidactGothicRegular style={{ color: '#011E46', fontSize: 14 }}>Collection 1</DidactGothicRegular>
            <TouchableOpacity onPress={() => setShowCollectionDetails(prevState => !prevState)}>
                <DownArrow height={16} width={16} fill={"#011E46"} style={{ opacity: showCollectionDetails ? 1 : 0, transform: [{ rotate: "180deg" }], marginLeft: 10 }} />
            </TouchableOpacity>
            <DidactGothicRegular style={styles.price}>Rs 3500</DidactGothicRegular>
            <DidactGothicRegular style={styles.sellingPrice}>MP : Rs 1500</DidactGothicRegular>
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setAddToCart(prevState => !prevState)}>
                {
                    addToCart ? <Checked height={30} width={30} fill={"#011E46"} /> : <Uncheck height={30} width={30} fill={"#011E46"} />
                }
            </TouchableOpacity>
        </View>

        {
            // when user will click the down arrow, it will show collection details or just show the collection's images
            showCollectionDetails ? 
            // collection details view
            <ScrollView style={{ marginTop: 12, marginRight: 10 }}>
                {/* will use map() to iterate through each product item to display */}
                <Product />
                <Product />
            </ScrollView> 
            :
            // collection view
            <ScrollView horizontal={true} style={{ marginVertical: 12 }}>
                {/* will use map() to iterate through each product item to display the image */}
                <Image source={require("../../../../assets/images/guy.jpg")} style={styles.productImage} />
                <Image source={require("../../../../assets/images/guy.jpg")} style={styles.productImage} />
                <Image source={require("../../../../assets/images/guy.jpg")} style={styles.productImage} />
                <Image source={require("../../../../assets/images/guy.jpg")} style={styles.productImage} />
            </ScrollView>
        }
        
        <TouchableOpacity onPress={() => setShowCollectionDetails(prevState => !prevState)} style={{ width: '100%', alignItems: 'center' }}>
            {/* used ternary operator in style so that down arrow becomes up arrow when clicked and the collection details are showing */}
            {/* it will denote that the collection details will close if clicked on it */}
            <DownArrow height={16} width={16} fill={"#011E46"} style={{ transform: showCollectionDetails ? [{ rotate: "180deg" }] : [] }} />
        </TouchableOpacity>

        {/* border at bottom after the collection */}
        <View style={{ width: '88%', height: 2, backgroundColor: '#E6E8EC' }} />
    </> 
 )
}

const styles = StyleSheet.create({
    collectionContainer: { 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 8 
    },
    productImage: {
        height: 90,
        width: 110,
        borderRadius: 10,
        marginRight: 10
    },
    price: {
        color:"#677890", 
        fontSize: 16,
        marginLeft: 'auto'
    },
    sellingPrice: {
        color: "#015DD3", 
        fontSize: 14,
        marginLeft: 15, 
        marginRight: 25
    }
})

export default Collection