import ProductScreenLayout from '@layouts/ProductScreenLayout';
import { ROUTES } from '@utils/constant';
import * as React from 'react';

function TopProductScreen(): React.JSX.Element {
  return <ProductScreenLayout title={ROUTES.TOP_PRODUCT}>{/* ... */}</ProductScreenLayout>;
}

export default TopProductScreen;
