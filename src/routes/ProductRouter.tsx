import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeatureProductScreen from '@screens/FeatureProductScreen';
import ProductDetailsScreen from '@screens/ProductDetailsScreen';
import RecommendedProductScreen from '@screens/RecommendedProductScreen';
import TopProductScreen from '@screens/TopProductScreen';
import { ROUTES } from '@utils/constant';
import * as React from 'react';

const Stack = createNativeStackNavigator();

function ProductRouter(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.FEATURE_PRODUCT}>
      <Stack.Screen name={ROUTES.FEATURE_PRODUCT} component={FeatureProductScreen} />
      <Stack.Screen name={ROUTES.RECOMMENDED_PRODUCT} component={RecommendedProductScreen} />
      <Stack.Screen name={ROUTES.TOP_PRODUCT} component={TopProductScreen} />
      <Stack.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}

export default ProductRouter;
