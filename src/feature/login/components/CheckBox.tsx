import * as React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Images from 'assets/images'
import { StyledText } from 'shared/components/base'
interface StyledCheckBoxProps {
    ischeck?: boolean
    onPress(): void
}
const StyledCheckBox = (props: StyledCheckBoxProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.container}>
                {props.ischeck ? (
                    <Image style={styles.checkIcon} source={Images.icons.uncheck} />
                ) : (
                    <Image style={styles.checkIcon} source={Images.icons.check} />
                )}
                <StyledText>{'common.savepassword'}</StyledText>
            </View>
        </TouchableOpacity>
    )
}
export default StyledCheckBox
const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
    },
    checkIcon: {
        width: '20@s',
        height: '20@s',
        marginRight: '2@s',
    },
})
