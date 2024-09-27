import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeatureProductScreen from '@screens/FeatureProductScreen';
import { ROUTES } from '@utils/constant';
import * as React from 'react';

const Stack = createNativeStackNavigator();

function ProductRouter(): React.JSX.Element {
  return (
    <Stack.Navigator initialRouteName={ROUTES.FEATURE_PRODUCT}>
      <Stack.Screen name={ROUTES.FEATURE_PRODUCT} component={FeatureProductScreen} />
    </Stack.Navigator>
  );
}

export default ProductRouter;
