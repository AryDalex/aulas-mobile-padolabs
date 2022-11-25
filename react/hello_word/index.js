/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import Home from './app/Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
// AppRegistry.registerComponent(appName, () => App);
