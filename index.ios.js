import Exponent from 'exponent';
import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

var Dashboard = require('./App/Views/Dashboard/index.ios.js');

var HackerNews = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#FF6600'
        initialRoute={{
          title: 'Hacker News',
          component: Dashboard,
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
});

AppRegistry.registerComponent('main', () => HackerNews);

module.exports = HackerNews;
