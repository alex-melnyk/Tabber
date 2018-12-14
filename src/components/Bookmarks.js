import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {AddButton} from "./common/AddButton";

class Bookmarks extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity style={{
                    width: '100%',
                    height: 200,
                    backgroundColor: 'violet'
                }} />

                {/*<Text>Bookmarks</Text>*/}
                <AddButton/>
            </SafeAreaView>
        );
    }
}

export {Bookmarks};