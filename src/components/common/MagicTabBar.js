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

                        if ((!route.params || !route.params.navigationDisabled)) {
                            const button= (
                                <TouchableOpacity
                                    key={route.key}
                                    style={Styles.tabStyle}
                                    onPress={() => (!route.params || !route.params.navigationDisabled) && jumpTo(route.key)}
                                >
                                    {
                                        renderIcon({
                                            route,
                                            focused,
                                            tintColor: focused
                                                ? activeTintColor
                                                : inactiveTintColor
                                        })
                                    }
                                </TouchableOpacity>
                            );

                            return button;
                        }

                        const Icon = renderIcon({
                            route,
                            focused,
                            tintColor: focused
                                ? activeTintColor
                                : inactiveTintColor
                        });

                        return {
                            ...Icon,
                            key: 'simple'
                        };
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
        // backgroundColor: 'red',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    tabStyle: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
};

export {MagicTabBar};