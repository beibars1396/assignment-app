import React, { useEffect, useState } from 'react'
import { FlatList} from 'react-native'
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

    // const sortQuestions = ( data ) => {
    //     for (i=0; i < data.length; i++){
    //         if(data[i].url == ""){
    //             data.push(data.shift())
    //         }
    //     }
    //     data.push(data.shift())
    // }

    const toQuestion = () => {
        navigation.navigate('Question')
        console.log('to question')
    }

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => setQuestions(data))
    }, [])

    return (
        <FlatList
            data={ questions }
            renderItem={({ item }) => <QuestionListView item={item} onPress={toQuestion} navigation={navigation} />}
            ItemSeparatorComponent={Separator}
        />
    )
}
