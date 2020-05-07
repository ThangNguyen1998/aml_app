import * as React from 'react'
import {
    StyleProp,
    Platform,
    StyleSheet,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    KeyboardAvoidingView,
} from 'react-native'
import { StyledText } from '.'

interface StyledInputProps extends TextInputProps {
    customStyle?: StyleProp<TextStyle>
    placeholder?: string
    placeholderTextColor?: string
    title?: string
}

const StyledInput = (props: StyledInputProps, ref: any) => {
    return (
        <View>
            <StyledText>{props.title || ''}</StyledText>
            <TextInput
                ref={ref}
                style={[styles.textInput, props.customStyle]}
                placeholderTextColor={props.placeholderTextColor || 'black'}
                placeholder={props.placeholder}
                underlineColorAndroid="transparent"
                {...props}
            />
        </View>
    )
}
const styles: any = StyleSheet.create({
    textInput: {
        height: 32,
        width: 128,
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
})
export default React.forwardRef(StyledInput)
