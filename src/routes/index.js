import { createSwitchNavigator, createAppContainer, NavigationActions } from 'react-navigation'

import AppLoaderScreen from '@screens/AppLoader'
import LoginScreen from '@screens/Login'

const MainSwitch = createSwitchNavigator(
    {
        AppLoader: AppLoaderScreen,
        Login: LoginScreen
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(MainSwitch)
