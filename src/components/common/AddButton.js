import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import View from 'react-native-overflow-view';

class AddButton extends Component {
    render() {
        return (
            <View
                style={{
                    position: 'absolute',
                    width: 100,
                    height: 100,
                    backgroundColor: 'red'
                }}
            >
                <TouchableOpacity
                    style={{
                        left: -100,
                        top: -100,
                        width: 150,
                        height: 150,
                        backgroundColor: 'green'
                    }}
                    onPress={() => {
                    }}
                />
            </View>
        );
    }
}

export {AddButton};