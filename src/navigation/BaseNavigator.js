import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Bookmarks from "../components/Bookmarks";
import Icon from '@expo/vector-icons/FontAwesome';
import Likes from "../components/Likes";
import Blank from "../components/common/Blank";
import Private from "../components/Private";
import Profile from "../components/Profile";
import {AddButton} from "../components/common/AddButton";

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
            tabBarIcon: <AddButton />
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