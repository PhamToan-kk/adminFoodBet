/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import App3 from './App3';
import AppNavigator from './src/navigation/MainNavigation';
import MainApp from './src/navigation/MainApp'


AppRegistry.registerComponent(appName, () => MainApp);
