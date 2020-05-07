import * as React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Themes } from 'assets/themes'
import TouchableRipple from './StyledTouchable'
import { StyledText } from '.'

interface StyledButtonProps {
    title: string
    customStyle?: StyleProp<ViewStyle>

    onPress(): void

    onLongPress?(): void
}

const StyledButton = (props: StyledButtonProps) => {
    return (
        <TouchableRipple
            customStyle={[styles.container, props.customStyle]}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
        >
            <StyledText style={styles.title}>{props.title}</StyledText>
        </TouchableRipple>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 44,
        width: 295,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: Themes.COLORS.secondary,
    },
    title: {
        color: Themes.COLORS.white,
    },
})
export default StyledButton
