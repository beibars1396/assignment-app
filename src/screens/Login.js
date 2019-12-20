import React from 'react'
import BigButton from '@components/buttons/BigButton'

import { Layout } from '@components/Layout'

export default ({ navigation }) => {
    const toApp = () => navigation.navigate('App')

    return (
        <Layout style={{ justifyContent: 'center', alignItems: 'center'}}>
            <BigButton title={'Войти'} onPress={toApp} />
        </Layout>
    )
}