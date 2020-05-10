import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { createStackNavigator } from '@react-navigation/stack'
import SplashView from 'feature/splash/SplashView'
import HomeView from 'feature/home/HomeView'
import LoginView from 'feature/login/LoginView'
import navigationConfigs from '../config/options'
import { LOGIN_ROUTE, HOME_ROUTE } from '../config/routes'
import ClinicView from 'feature/clinic/ClinicView'
import ModalClinicView from 'feature/clinic/ModalClinicView'
import BookingView from 'feature/clinic/BookingView'

const Stack = createStackNavigator()

const LoginStack = () => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name={HOME_ROUTE.booking} component={BookingView} />
            <Stack.Screen name={'modalClinic'} component={ModalClinicView} />
            <Stack.Screen name={HOME_ROUTE.clinic} component={ClinicView} />
            <Stack.Screen name={LOGIN_ROUTE.login} component={LoginView} />
        </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...navigationConfigs }}>
            <Stack.Screen name={HOME_ROUTE.home} component={HomeView} />
        </Stack.Navigator>
    )
}

const Navigation = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [userToken, setUserToken] = useState<string | null>(null)

    const _bootstrapAsync = async () => {
        setIsLoading(true)
        const asyncUserToken = await AsyncStorage.getItem('userToken')
        if (asyncUserToken) {
            setUserToken(asyncUserToken)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        _bootstrapAsync()
    }, [])

    if (isLoading) {
        return <SplashView />
    }

    return userToken == null ? <LoginStack /> : <HomeStack />
}

export default Navigation
