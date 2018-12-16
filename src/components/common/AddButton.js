import React, {Component} from 'react';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddButton extends Component {
    activation = new Animated.Value(0);

    state = {
        active: false
    };

    togglePressed = () => {
        if (this.state.active) {
            Animated.spring(this.activation, {
                toValue: 0
            }).start(() => this.setState({active: false}));
        } else {
            Animated.spring(this.activation, {
                toValue: 1
            }).start(() => this.setState({active: true}));
        }
    };

    render() {
        const activationRotate = this.activation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '135deg']
        });

        return (
            <View
                pointerEvents="box-none"
                style={Styles.container}
            >
                <TouchableWithoutFeedback
                    onPress={this.togglePressed}
                >
                    <Animated.View style={{
                        top: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        backgroundColor: 'red',
                        transform: [
                            {rotate: activationRotate}
                        ]
                    }}>
                        <Icon
                            name="plus"
                            style={{
                                fontSize: 30,
                                color: 'white'
                            }}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const Styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'visible'
    }
};

export {AddButton};