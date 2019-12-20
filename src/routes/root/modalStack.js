import { createStackNavigator } from 'react-navigation-stack'

import MainStack from './stack'

const rootModalStack = createStackNavigator(
    {
        MainStack: {
            screen: MainStack,
            path: '',
            navigationOptions: {
                header: null
            }
        }
    },
    {
        mode: 'modal'
    }
)   

export default rootModalStack
