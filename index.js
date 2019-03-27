/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {AppBottomTabNavigator} from './Component/Main/AppNavigator';
import {createAppContainer} from 'react-navigation';
import App from './App';
import {name as appName} from './app.json';
const AppStackNavigatorContainer = createAppContainer(AppBottomTabNavigator);
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
