import React from 'react'
import { Text } from 'react-native'

const NotoSansBold = ({style, children}) => {
  return (
    <Text
        style={{
            fontFamily: 'NotoSans-Bold',
            color: "#fff",
            fontSize: 18,
            ...style
        }}
    >{children}</Text>
  )
}

export default NotoSansBold