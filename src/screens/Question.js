import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

import { Layout } from '@components/Layout'
import BackButton from '@components/buttons/BackButton'

const QuestionScreen = ({ navigation, item }) => {

    const initialValue = [
        {answer: "ответ", number: 0}
    ]

    const url = navigation.getParam('url')

    const [question, setQuestion] = useState([])

    const [answers, setAnswers] = useState(initialValue)

    useEffect(async () => {
        await fetch(url).then(response => response.json()).then(data => setAnswers(data.answers))
        await fetch(url).then(response => response.json()).then(data => setQuestion(data.question))
    }, [])
    
    return (
        <Layout style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text> {question} </Text>
          {answers.map((answer, index) => (
            <Text>{answers[index].number} {answers[index].answer}</Text>
          ))}
        </Layout>
    )
}

QuestionScreen.navigationOptions = ({navigation}) => ({
    // headerLeft: <BackButton onPress={navigation.goBack()}/>
})

export default QuestionScreen
