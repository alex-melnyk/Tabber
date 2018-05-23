import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class Private extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Private</Text>
            </SafeAreaView>
        );
    }
}

export default Private;