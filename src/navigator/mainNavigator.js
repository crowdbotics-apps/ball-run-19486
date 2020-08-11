import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps89537Navigator from '../features/Maps89537/navigator';
import Tutorial89536Navigator from '../features/Tutorial89536/navigator';
import Messaging89535Navigator from '../features/Messaging89535/navigator';
import Achievements89534Navigator from '../features/Achievements89534/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps89537: { screen: Maps89537Navigator },
Tutorial89536: { screen: Tutorial89536Navigator },
Messaging89535: { screen: Messaging89535Navigator },
Achievements89534: { screen: Achievements89534Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
