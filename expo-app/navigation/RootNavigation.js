import React from 'react';
import { Notifications } from 'expo';
import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator'

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthNavigator,
  Main: MainTabNavigator,
});

export default class RootNavigation extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
