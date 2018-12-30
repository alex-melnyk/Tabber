import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class Settings extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Settings</Text>
            </SafeAreaView>
        );
    }
}

export {Settings};