import { createStackNavigator } from 'react-navigation-stack'

import MainTabs from '@navigation/root/tabs'
// import navigationHeader from '@utils/navigation/navigationHeader'

const rootStack = createStackNavigator(
  {
    MainTabs: {
      screen: MainTabs,
      path: '',
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'MainTabs',
    defaultNavigationOptions: {
    //   ...navigationHeader
    }
  }
)

export default rootStack
