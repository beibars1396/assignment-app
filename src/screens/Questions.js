import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { Layout } from '@components/Layout'
import QuestionsList from '@components/QuestionsList'
import { Block } from '@components/Layout'

const Separator = styled.View`
  height: 1px;
  
  border-top-width: 1px;
  border-top-color: #EBEBEB;

  border-bottom-width: 1px;
  border-bottom-color: #EBEBEB;
`

const QuestionsScreen = ({ navigation }) => {
    const [name, setName] = useState()

    useEffect(() => {
        async function fetchUserInfo() {
            try{
                const user_id = await AsyncStorage.getItem('user_id')
                const access_token = await AsyncStorage.getItem('access_token')
                const response = await fetch(`https://api.vk.com/method/account.getProfileInfo?user_id=${user_id}&access_token=${access_token}&v=5.84`)
                const json = await response.json()
                setName(json.response.first_name)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchUserInfo()
    }, [])

    return (
        <Layout>
            <Block>
                <Text style={{
                    fontSize: 30
                }}>Привет, {name}</Text>
            </Block>
            <Separator />
            <QuestionsList navigation={navigation} />
        </Layout>
    )
}

export default QuestionsScreen
