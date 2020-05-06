import React from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image'

interface StyledImageProps extends FastImageProps {
    customStyle?: any
}

const StyledImage = (props: StyledImageProps) => {
    const { customStyle, source, resizeMode } = props
    return <FastImage style={customStyle} source={source} resizeMode={resizeMode} {...props} />
}
export default React.memo(StyledImage)
