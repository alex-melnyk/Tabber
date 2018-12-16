import React, {Component} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {randomColor} from "../utils/index";

class Bookmarks extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center'
            }}>
                <FlatList
                    data={[...new Array(15)].map((v, i) => ({key: `item_${i}`}))}
                    renderItem={({item}) => (
                        <TouchableOpacity style={{
                            margin: 10,
                            flex: 1,
                            minHeight: 150,
                            borderRadius: 10,
                            backgroundColor: randomColor()
                        }}/>
                    )}
                />
            </SafeAreaView>
        );
    }
}

export {Bookmarks};