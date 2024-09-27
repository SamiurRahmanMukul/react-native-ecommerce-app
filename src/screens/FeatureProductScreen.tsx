import ProductScreenLayout from '@layouts/ProductScreenLayout';
import { ROUTES } from '@utils/constant';
import * as React from 'react';

function FeatureProductScreen(): React.JSX.Element {
  return <ProductScreenLayout title={ROUTES.FEATURE_PRODUCT}>{/* ... */}</ProductScreenLayout>;
}

export default FeatureProductScreen;
