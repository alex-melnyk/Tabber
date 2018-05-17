import React, {Component} from 'react';
import {Animated, Easing, TouchableHighlight, TouchableOpacity, View} from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const SIZE = 80;
const durationIn = 300;
const durationOut = 200;

class AddButton extends Component {
    mode = new Animated.Value(0);
    icon1 = new Animated.Value(0);
    icon2 = new Animated.Value(0);
    icon3 = new Animated.Value(0);

    toggleView = () => {
        if (this.mode._value) {
            Animated.parallel(
                [this.mode, this.icon1, this.icon2, this.icon3].map((item) => Animated.timing(item, {
                    toValue: 0,
                    duration: durationIn,
                    easing: Easing.cubic
                }))
            ).start();
        } else {

            Animated.parallel([
                Animated.timing(this.mode, {
                    toValue: 1,
                    duration: durationOut,
                    easing: Easing.cubic
                }),
                Animated.sequence([
                    ...[this.icon1, this.icon2, this.icon3].map((item) => Animated.timing(item, {
                        toValue: 1,
                        duration: durationOut,
                        easing: Easing.elastic(1)
                    }))
                ])
            ]).start();
        }
    };

    render() {
        const firstX = this.icon1.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -40]
        });
        const firstY = this.icon1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
        });
        const secondX = this.icon2.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 20]
        });
        const secondY = this.icon2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -55]
        });
        const thirdX = this.icon3.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 80]
        });
        const thirdY = this.icon3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
        });

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });

        const bluring = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 5]
        });

        const blurin2 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -20]
        });

        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center'
            }}>
                <SubAddButton
                    style={{
                        left: firstX,
                        top: firstY
                    }}
                    icon="rocket"
                />
                <SubAddButton
                    style={{
                        left: secondX,
                        top: secondY
                    }}
                    icon="home"
                />
                <SubAddButton
                    style={{
                        left: thirdX,
                        top: thirdY
                    }}
                    icon="archive"
                />

                <Animated.View style={{
                    transform: [
                        {rotate: rotation}
                    ],
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: SIZE,
                    height: SIZE,
                    borderRadius: SIZE / 2,
                    backgroundColor: '#48A2F8',
                }}>
                    <TouchableOpacity
                        onPress={this.toggleView}
                        activeOpacity={1}
                    >
                        <Icon name="plus" size={24} color="#F8F8F8"/>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

class SubAddButton extends Component {
    render() {
        const {
            style,
            icon,
            onPress
        } = this.props;

        return (
            <Animated.View style={{
                position: 'absolute',
                ...style
            }}>
                <TouchableHighlight
                    onPress={() => onPress && onPress()}
                    style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE / 2,
                        height: SIZE / 2,
                        borderRadius: SIZE / 4,
                        backgroundColor: '#48A2F8'
                    }}
                >
                    <Icon name={icon} size={16} color="#F8F8F8"/>
                </TouchableHighlight>
            </Animated.View>
        );
    }
}

SubAddButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

export {AddButton};