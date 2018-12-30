import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AddButton, Bookmarks, Likes, MagicTabBar, Private, Profile, Settings} from "../components";
import {Routes} from "./Routes";

const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsBookmarks]: {
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
    [Routes.TabsLikes]: {
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
    MultiBar: {
        screen: () => null,
        navigationOptions: () => ({
            tabBarIcon: (
                <AddButton
                    routes={[
                        {
                            routeName: Routes.OtherScreen,
                            color: 'red'
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: 'green'
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: 'blue'
                        },
                    ]}
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },
    [Routes.TabsPrivate]: {
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
    [Routes.TabsProfile]: {
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
    tabBarComponent: MagicTabBar,
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

const BaseNavigator = createStackNavigator({
    [Routes.Tabs]: TabsNavigator,
    [Routes.OtherScreen]: Settings
}, {
    headerMode: 'none'
});

const BaseNavigatorContainer = createAppContainer(BaseNavigator);

export {BaseNavigatorContainer as BaseNavigator};