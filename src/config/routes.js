import { DrawerNavigator } from 'react-navigation'
import Home from '../screens/Home'
import transitionConfig from './transitions'
import SideMenu from '../components/SideMenu'

export const routes = {
  home: 'Home',
}

export default DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    transitionConfig,
    contentComponent: SideMenu,
  },
)
