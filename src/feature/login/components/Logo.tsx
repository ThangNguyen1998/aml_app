import * as React from 'react'
import { Text, View, Image, StyleProp, ViewStyle } from 'react-native'
import Images from 'assets/images'
import { ScaledSheet } from 'react-native-size-matters'
import { StyledText } from 'shared/components/base'
interface StyledLogoProps {
    customstyle?: StyleProp<ViewStyle>
}
const Logo = (props: StyledLogoProps) => {
    return (
        <View style={[props.customstyle]}>
            <Image source={Images.photo.logo} />
            <StyledText customStyle={styles.logotext}>{'for Clinic'}</StyledText>
        </View>
    )
}
const styles = ScaledSheet.create({
    logotext: {
        fontWeight: 'bold',
    },
})
export default Logo
