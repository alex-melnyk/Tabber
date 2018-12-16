import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from "react-native";

const MagicTabBar = (params) => {
    console.log(params);

    const {style, navigation, activeTintColor, inactiveTintColor, renderIcon, jumpTo} = params;

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
            <SafeAreaView
                style={[Styles.fakeBackground, style]}
                forceInset={{
                    top: 'never',
                    bottom: 'always',
                }}
            >
                <View style={{height: 49}} />
            </SafeAreaView>
            <View style={Styles.content}>
                {
                    routes.map((route, idx) => {
                        const focused = index === idx;

                        if (!route.params || !route.params.navigationDisabled) {
                            return (
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
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'flex-end',
        minHeight: 200
    },
    fakeBackground: {
        position: 'absolute',
        width: '100%'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    tabStyle: {
        paddingVertical: 11,
        width: 50,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
};

export {MagicTabBar};