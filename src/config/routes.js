import { DrawerNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Season from '../screens/Season'
import transitionConfig from './transitions'
import SideMenu from '../components/SideMenu'

export const routes = {
  home: 'Home',
}

export default DrawerNavigator(
  {
    Season: {
      screen: Season,
    },
    Home: {
      screen: Home,
    },
  },
  {
    transitionConfig,
    contentComponent: SideMenu,
  },
)
