import { createSwitchNavigator, createAppContainer, NavigationActions } from 'react-navigation'

import AppLoaderScreen from '@screens/AppLoader'
import LoginScreen from '@screens/Login'
import AppRoot from '@navigation/root/modalStack'

const MainSwitch = createSwitchNavigator(
    {
        AppLoader: AppLoaderScreen,
        Login: LoginScreen,
        App: AppRoot
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(MainSwitch)
