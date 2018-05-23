import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewOverflow from 'react-native-view-overflow';

import {AddButton} from "../components/common/AddButton";

import Bookmarks from "../components/Bookmarks";
import Likes from "../components/Likes";
import Private from "../components/Private";
import Profile from "../components/Profile";
import {TouchableWithoutFeedback} from "react-native";


const BaseNavigator = createBottomTabNavigator({
    Bookmarks: {
        screen: Bookmarks,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="bookmark"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Likes: {
        screen: Likes,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="heart"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Adding: {
        screen: () => null,
        navigationOptions: () => ({
            tabBarIcon: <AddButton/>
        })
    },
    Private: {
        screen: Private,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="lock"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="user"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
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
    },
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
});

const defaultGetStateForAction = BaseNavigator.router.getStateForAction;

// BaseNavigator.router.getStateForAction = (action, state) => {
//     if (action.type === NavigationActions.NAVIGATE && action.routeName === 'Adding') {
//         return null;
//     }
//
//     return defaultGetStateForAction(action, state);
// };

export {BaseNavigator};