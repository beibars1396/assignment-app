import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import QuestionsScreen from '@screens/Questions'
// import TabBarButton from '@components/buttons/TabBarButton'
import ExitTabButton from '@components/buttons/ExitTabButton'
import AppLoader from '@screens/AppLoader'
import QuestionScreen from '@screens/Question'

const ExitTab = ({ navigation }) => { 
    const onBack = () => navigation.navigate('Login')
    return (
        <ExitTabButton onPress={onBack} />
    )
}

const QuestionsTabStack = createStackNavigator(
    {
      Questions: {
        screen: QuestionsScreen
      },
      Question: QuestionScreen
    }
)

export default createBottomTabNavigator(
    {
        QuestionsTab: {
            screen: QuestionsTabStack,
            navigationOptions: {
                title: 'Список вопросов'
            }
        },
        ExitTab: {
            screen: AppLoader,
            navigationOptions: () => ({
                tabBarIcon: <ExitTab />,
                title: 'Выход'
            })
        }
    },
    {
        initialRouteName: 'QuestionsTab'
    }
)
