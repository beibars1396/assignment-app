import React, { useCallback } from 'react'

import { Layout } from '@components/Layout'
import QuestionsList from '@components/QuestionsList'

const QuestionsScreen = ({ navigation }) => {

    return (
        <Layout>
            <QuestionsList navigation={navigation} />
        </Layout>
    )
}

export default QuestionsScreen
