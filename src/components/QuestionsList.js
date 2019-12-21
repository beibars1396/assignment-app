import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import QuestionListView from './QuestionListView'

const Separator = styled.View`
  height: 1px;
  
  border-top-width: 1px;
  border-top-color: #EBEBEB;

  border-bottom-width: 1px;
  border-bottom-color: #EBEBEB;
`

export default ({ navigation }) => {
    const url = "https://api.myjson.com/bins/8561o"

    const [questions, setQuestions] = useState([])

    const toQuestion = () => {
        navigation.navigate('Question')
    }

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(url)
            let json = await response.json()
            setQuestions(json.sort( (a) => (a.url) ? -1 : 1 ))
        }
        fetchData()
    }, [])

    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={ questions }
            renderItem={({ item }) => <QuestionListView item={item} onPress={toQuestion} navigation={navigation} />}
            ItemSeparatorComponent={ Separator }
            ListFooterComponent={ Separator }
        />
    )
}
