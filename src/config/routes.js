import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import transitionConfig from './transitions'

export const routes = {
  home: 'Home',
}

export default createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    transitionConfig,
    initialRouteParams: { transition: 'fade' },
    initialRouteName: 'Home',
  },
)