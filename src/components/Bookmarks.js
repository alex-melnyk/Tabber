import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class Bookmarks extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Bookmarks</Text>
            </SafeAreaView>
        );
    }
}

export {Bookmarks};