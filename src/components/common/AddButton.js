import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';

class AddButton extends Component {
    render() {
        return (
            <TouchableOpacity
                // pointerEvents="box-none"
                style={{
                    position: 'absolute',
                    width: 120,
                    height: 900,
                    backgroundColor: 'red'
                }}
            >

            </TouchableOpacity>
        );
    }
}

export {AddButton};