import React from 'react'
import { Text } from 'react-native'

const DidactGothicRegular = ({style, children}) => {
  return (
    <Text
        style={{
            fontFamily: 'DidactGothic-Regular',
            color: "#fff",
            fontSize: 18,
            ...style
        }}
    >{children}</Text>
  )
}

export default DidactGothicRegular