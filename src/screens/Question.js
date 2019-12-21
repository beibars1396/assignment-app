import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

import { Layout } from '@components/Layout'
import BackButton from '@components/buttons/BackButton'

const QuestionScreen = ({ navigation, item }) => {

    let EmptyQuestionValue = {
        question: "Вопрос недоступен",
        answers: []
    }

    const url = navigation.getParam('url')
    
    const [questionValue, setQuestion] = useState(EmptyQuestionValue)

    useEffect(() => {
        if(url) fetch(url).then(response => response.json()).then(data => setQuestion(data)) 
    }, [])
    
    return (
        <Layout style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text> {questionValue.question} </Text>
            {questionValue.answers.map((answer, index) => (
                <Text key={index} >{answer.number} {answer.answer}</Text>
            ))}
        </Layout>
    )
}

QuestionScreen.navigationOptions = ({navigation}) => ({
    headerLeft: <BackButton onPress={() => navigation.goBack()}/>
})

export default QuestionScreen
