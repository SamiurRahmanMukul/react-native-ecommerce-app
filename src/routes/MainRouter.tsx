import CustomDrawer from '@components/utilities/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS, ROUTES } from '@utils/constant';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import HomeRouter from './HomeRouter';

const Drawer = createDrawerNavigator();

function MainRouter(): React.JSX.Element {
  const { colorScheme } = useColorScheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: [
          styles.drawerStyle,
          { backgroundColor: colorScheme === 'dark' ? COLORS.BLACK : COLORS.WHITE },
        ],
      }}
      initialRouteName={ROUTES.HOME_PAGE}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={ROUTES.HOME_PAGE} component={HomeRouter} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    width: 280,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainRouter;
