import React from 'react';
import {AppRegistry, View} from 'react-native';

import {BaseNavigator} from "./src/navigation";

const App = () => (
    <View style={{
        flex: 1,
        backgroundColor: '#293656'
    }}>
        <BaseNavigator/>
    </View>
);

AppRegistry.registerComponent('tabber', () => App);
