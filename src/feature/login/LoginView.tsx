import * as React from 'react'
import { View, SafeAreaView, Platform } from 'react-native'
import { StyledInput, StyledText, StyledButton } from 'shared/components/base'
import { ScaledSheet } from 'react-native-size-matters'
import CheckBox from './components/CheckBox'
import { useState } from 'react'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import { Themes } from 'assets/themes'
import Logo from './components/Logo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const LoginView = () => {
    const [ischeck, setischeck] = useState(false)
    const input1 = React.useRef<HTMLDivElement>(null)
    const input2 = React.useRef<HTMLDivElement>(null)
    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.wrapp}>
                <View style={styles.container}>
                    <Logo customstyle={styles.logo} />
                    <StyledInput
                        ref={input1}
                        onSubmitEditing={() => {
                            input2?.current?.focus()
                        }}
                        customStyle={styles.textInput}
                        placeholder="user@example.com"
                        title={'common.username'}
                    />
                    <StyledInput
                        ref={input2}
                        title={'common.password'}
                        customStyle={styles.textInput}
                        placeholder="*******"
                    />
                    <CheckBox onPress={() => setischeck(!ischeck)} ischeck={ischeck}></CheckBox>
                    <View style={styles.loginbutton}>
                        <StyledButton title={'common.login'} onPress={() => {}} />
                        <TouchableOpacity activeOpacity={0.8}>
                            <StyledText style={styles.forgetpassword}>{'common.forgetpassword'}</StyledText>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <StyledText style={styles.register}>{'common.register'}</StyledText>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default LoginView
const styles = ScaledSheet.create({
    wrapp: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        marginHorizontal: '40@s',
        flex: 1,
    },
    textInput: {
        width: '100%',
        marginBottom: '20@s',
    },
    loginbutton: {
        marginTop: '28@s',
        alignItems: 'center',
    },
    forgetpassword: {
        marginTop: '20@s',
        textDecorationLine: 'underline',
    },
    register: {
        marginVertical: '50@s',
        textDecorationLine: 'underline',
        color: Themes.COLORS.textSecondary,
    },
    logo: {
        alignItems: 'center',
        marginVertical: '60@vs',
    },
})
