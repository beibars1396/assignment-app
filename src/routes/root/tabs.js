import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import QuestionsScreen from '@screens/Questions'
import AppLoader from '@screens/AppLoader'
import QuestionScreen from '@screens/Question'

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
            navigationOptions: {
                title: 'Выход'
            }
        }
    },
    {
        initialRouteName: 'QuestionsTab'
    }
)
