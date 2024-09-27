import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '@screens/CartScreen';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import SearchScreen from '@screens/SearchScreen';
import { COLORS, ROUTES } from '@utils/constant';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function HomeRouter(): React.JSX.Element {
  const { colorScheme } = useColorScheme();

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
          tabBarInactiveTintColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK,
          tabBarStyle: [
            styles.tabBarStyle,
            {
              backgroundColor: colorScheme === 'dark' ? '#000' : COLORS.WHITE,
              borderTopStartRadius: colorScheme === 'dark' ? 0 : 20,
              borderTopEndRadius: colorScheme === 'dark' ? 0 : 20,
            },
          ],
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
          tabBarInactiveTintColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK,
          tabBarStyle: [
            styles.tabBarStyle,
            {
              backgroundColor: colorScheme === 'dark' ? '#000' : COLORS.WHITE,
              borderTopStartRadius: colorScheme === 'dark' ? 0 : 20,
              borderTopEndRadius: colorScheme === 'dark' ? 0 : 20,
            },
          ],
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
          tabBarInactiveTintColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK,
          tabBarStyle: [
            styles.tabBarStyle,
            {
              backgroundColor: colorScheme === 'dark' ? '#000' : COLORS.WHITE,
              borderTopStartRadius: colorScheme === 'dark' ? 0 : 20,
              borderTopEndRadius: colorScheme === 'dark' ? 0 : 20,
            },
          ],
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
          tabBarInactiveTintColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK,
          tabBarStyle: [
            styles.tabBarStyle,
            {
              backgroundColor: colorScheme === 'dark' ? '#000' : COLORS.WHITE,
              borderTopStartRadius: colorScheme === 'dark' ? 0 : 20,
              borderTopEndRadius: colorScheme === 'dark' ? 0 : 20,
            },
          ],
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
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
  },
});

export default HomeRouter;
