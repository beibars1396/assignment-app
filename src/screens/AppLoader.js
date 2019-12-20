import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Layout } from '@components/Layout'

export default ({ navigation }) => {
    return (
        <Layout style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="small" />
        </Layout>
    )
}