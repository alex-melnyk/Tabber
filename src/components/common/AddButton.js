import React, {Component} from 'react';
import {Animated, Easing, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewOverflow from 'react-native-view-overflow';
import {transform} from "../../utils/anim";

const AnimatedViewOverflow = Animated.createAnimatedComponent(ViewOverflow);

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
            outputRange: [0, -50]
        });
        const firstY = this.icon1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50]
        });
        const firstZ = this.icon1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const secondX = this.icon2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0]
        });
        const secondY = this.icon2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70]
        });
        const secondZ = this.icon2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const thirdX = this.icon3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50]
        });
        const thirdY = this.icon3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50]
        });
        const thirdZ = this.icon3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });

        return (
            <ViewOverflow style={{
                // position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <SubAddButton
                    style={{transform: transform(firstX, firstY, firstZ)}}
                    icon="rocket"
                    onPress={() => console.log('OK1')}
                />
                <SubAddButton
                    style={{transform: transform(secondX, secondY, secondZ)}}
                    icon="home"
                    onPress={() => console.log('OK2')}
                />
                <SubAddButton
                    style={{transform: transform(thirdX, thirdY, thirdZ)}}
                    icon="archive"
                    onPress={() => console.log('OK3')}
                />

                <AnimatedViewOverflow style={{
                    transform: [{rotate: rotation}]
                }}>
                    <TouchableWithoutFeedback
                        onPress={this.toggleView}
                        activeOpacity={1}
                    >
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE,
                            height: SIZE,
                            borderRadius: SIZE / 2,
                            backgroundColor: '#48A2F8',
                        }}>
                            <Icon name="plus" size={24} color="#F8F8F8"/>
                        </View>
                    </TouchableWithoutFeedback>
                </AnimatedViewOverflow>
            </ViewOverflow>
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
            <AnimatedViewOverflow style={{
                position: 'absolute',
                width: SIZE / 2,
                height: SIZE / 2,
                ...style
            }}>
                <TouchableOpacity
                    onPress={() => onPress && onPress()}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE / 2,
                        height: SIZE / 2,
                        borderRadius: SIZE / 4,
                        backgroundColor: '#48A2F8'
                    }}
                >
                    <Icon name={icon} size={16} color="#F8F8F8"/>
                </TouchableOpacity>
            </AnimatedViewOverflow>
        );
    }
}

SubAddButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

export {AddButton};