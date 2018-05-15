import React from 'react';
import {BaseNavigator} from "./src/navigation";
import {View} from "react-native";

//
const App = () => (
    <View style={{
        flex: 1,
        backgroundColor: '#293656'
    }}>
        <BaseNavigator/>
    </View>
);

export default App;