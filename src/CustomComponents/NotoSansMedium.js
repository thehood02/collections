import React from 'react'
import { Text } from 'react-native'

const NotoSansMedium = ({style, children}) => {
  return (
    <Text
        style={{
            fontFamily: 'NotoSans-Medium',
            color: "#fff",
            fontSize: 18,
            ...style
        }}
    >{children}</Text>
  )
}

export default NotoSansMedium