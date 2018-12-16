import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from "react-native";

const MagicTabBar = ({navigation, activeTintColor, inactiveTintColor, renderIcon, jumpTo}) => {
    const {
        index,
        routes
    } = navigation.state;

    return (
        <SafeAreaView
            pointerEvents="box-none"
            style={Styles.container}
            forceInset={{
                top: 'never',
                bottom: 'always',
            }}
        >
            <View style={Styles.content}>
                {
                    routes.map((route, idx) => {
                        const focused = index === idx;

                        return (
                            <TouchableOpacity
                                key={route.key}
                                style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                }}
                                onPress={() => jumpTo(route.key)}
                            >
                                {
                                    renderIcon({
                                        route,
                                        focused,
                                        tintColor: focused ? activeTintColor : inactiveTintColor
                                    })
                                }
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </SafeAreaView>
    );
};

const Styles = {
    container: {
        justifyContent: 'flex-end',
        minHeight: 200,
        backgroundColor: 'red',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    }
};

export {MagicTabBar};

/*
tabBarComponent: (props) => {
    const {
        navigation: {state: {index, routes}},
        style,
        activeTintColor,
        inactiveTintColor,
        renderIcon,
        jumpTo
    } = props;

    return (
        <ViewOverflow style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            ...style
        }}>
            {
                routes.map((route, idx) => (
                    <ViewOverflow
                        key={route.key}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => jumpTo(route.key)}
                        >
                            {renderIcon({
                                route,
                                focused: index === idx,
                                tintColor: index === idx ? activeTintColor : inactiveTintColor
                            })}
                        </TouchableWithoutFeedback>
                    </ViewOverflow>
                ))
            }
        </ViewOverflow>
    );
}
*/