import React, { useEffect } from 'react'
import BigButton from '@components/buttons/BigButton'
import VKLogin from 'react-native-vkontakte-login'
import AsyncStorage from '@react-native-community/async-storage'

import { Layout } from '@components/Layout'

export default ({ navigation }) => {
    useEffect(() => {
        VKLogin.initialize(7220257)
    })

    const onLogin = async () => {
        const permissions = ['account']
        console.log('Login', `Logging in with permissions: ${permissions}`);
        try {
            const auth = await VKLogin.login(permissions);
            console.log(
                'Login Page',
                `Login response:\n${JSON.stringify(auth, null, 2)}`,
            )
            await AsyncStorage.multiSet([
                ['access_token', auth.access_token],
                ['user_id', auth.user_id]
            ])
            navigation.navigate('App')
        } catch (error) {
            console.log('Login', error.message, true);
        }
    }

    const toApp = () => {
        navigation.navigate('App')
    }

    return (
        <Layout style={{ justifyContent: 'center', alignItems: 'center'}}>
            <BigButton title={'Логин ВК'} onPress={onLogin} />
            {/* <BigButton title={'Войти'} onPress={toApp} /> */}
        </Layout>
    )
}