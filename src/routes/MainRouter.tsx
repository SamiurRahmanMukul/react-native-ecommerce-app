import * as React from 'react';
import { ROUTES } from '@utils/constant';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeRouter from './HomeRouter';

const Drawer = createDrawerNavigator();

function MainRouter(): React.JSX.Element {
  return (
    <Drawer.Navigator initialRouteName={ROUTES.HOME_PAGE} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={ROUTES.HOME_PAGE} component={HomeRouter} />
    </Drawer.Navigator>
  );
}

export default MainRouter;
