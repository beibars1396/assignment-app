import React from 'react' 
import styled from 'styled-components'
import { Text } from 'react-native'

import { Block } from '@components/Layout'
// import QuestionContextProvider from './question.context'

const QuestionContainer = styled.TouchableOpacity`

`

export default ({ item, navigation }) => {
    const toQuestion = () => {
        navigation.navigate('Question', {url: item.url})
    }

    return (
        <QuestionContainer activeOpacity={0.75} onPress={toQuestion} >
            <Block>
                <Text>
                    {item.title}
                </Text>
                <Text>
                    {item.url}
                </Text>
            </Block>
        </QuestionContainer>
    )
}