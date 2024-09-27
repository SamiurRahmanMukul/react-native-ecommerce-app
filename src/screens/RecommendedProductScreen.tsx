import ProductScreenLayout from '@layouts/ProductScreenLayout';
import { ROUTES } from '@utils/constant';
import * as React from 'react';

function RecommendedProductScreen(): React.JSX.Element {
  return <ProductScreenLayout title={ROUTES.RECOMMENDED_PRODUCT}>{/* ... */}</ProductScreenLayout>;
}

export default RecommendedProductScreen;
