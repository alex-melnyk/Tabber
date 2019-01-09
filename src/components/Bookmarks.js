import React, {Component} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {randomColor} from "../utils/index";

class Bookmarks extends Component {
    renderCard = () => (
        <TouchableOpacity style={{
            marginTop: 10,
            marginHorizontal: 10,
            flex: 1,
            minHeight: 120,
            borderRadius: 10,
            backgroundColor: randomColor()
        }}/>
    );

    render() {
        return (
            <SafeAreaView style={{
                flex: 1
            }}>
                <FlatList
                    data={[...new Array(9)].map((v, i) => ({key: `item_${i}`}))}
                    renderItem={this.renderCard}
                />
            </SafeAreaView>
        );
    }
}

export {Bookmarks};