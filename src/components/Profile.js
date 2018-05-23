import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Profile</Text>
            </SafeAreaView>
        );
    }
}

export default Profile;