import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ROUTES } from '@utils/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from '@screens/SearchScreen';
import CartScreen from '@screens/CartScreen';
import ProfileScreen from '@screens/ProfileScreen';
import { StyleSheet } from 'react-native';
import HomeScreen from '@screens/HomeScreen';

const Tab = createBottomTabNavigator();

function HomeRouter(): React.JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          title: ROUTES.HOME,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.BLACK,
          tabBarStyle: styles.tabBarStyle,
        }}
      />

      <Tab.Screen
        name={ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          title: ROUTES.SEARCH,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.BLACK,
          tabBarStyle: styles.tabBarStyle,
        }}
      />

      <Tab.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={{
          title: ROUTES.CART,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={size} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.BLACK,
          tabBarStyle: styles.tabBarStyle,
        }}
      />

      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          title: ROUTES.PROFILE,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.BLACK,
          tabBarStyle: styles.tabBarStyle,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.WHITE,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    height: 80,
    paddingBottom: 10,
    paddingTop: 10,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});

export default HomeRouter;
