import React from 'react'
import BigButton from '@components/buttons/BigButton'

import { Layout } from '@components/Layout'

export default ({ navigation }) => {

    const url = 'https://api.myjson.com/bins/8561o'

    const toApp = () => {
        navigation.navigate('App')
    }

    return (
        <Layout style={{ justifyContent: 'center', alignItems: 'center'}}>
            <BigButton title={'Войти'} onPress={toApp} />
        </Layout>
    )
}