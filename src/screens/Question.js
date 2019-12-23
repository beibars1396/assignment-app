import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import { Layout } from '@components/Layout'
import BackButton from '@components/buttons/BackButton'
import FlipCard from '@components/FlipCard'

const Text = styled.Text`
    font-size: 30px;
    text-align: center;
`

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
                <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text >{answer.answer}</Text>
                    <FlipCard number={answer.number} />
                </View>
            ))}
        </Layout>
    )
}

QuestionScreen.navigationOptions = ({navigation}) => ({
    headerLeft: <BackButton onPress={() => navigation.goBack()}/>
})

export default QuestionScreen
