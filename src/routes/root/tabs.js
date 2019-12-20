import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import QuestionsListScreen from '@screens/QuestionsList'

export default createBottomTabNavigator(
    {
        QuestionsTab: {
            screen: QuestionsListScreen,
            path: 'questions',
        },
        // RatingTab: {
        //     screen: RatingTabStack,
        //     path: 'rating',
        // }
    },
    {
        initialRouteName: 'QuestionsTab',
        tabBarOptions: {
            // showLabel: false
        }
    }
)
