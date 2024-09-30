import ProductCard from '@components/product/ProductCard';
import ProductScreenLayout from '@layouts/ProductScreenLayout';
import { ROUTES } from '@utils/constant';
import { PRODUCT_LABEL, PRODUCTS } from '@utils/data';
import * as React from 'react';
import { View } from 'react-native';

function FeatureProductScreen(): React.JSX.Element {
  return (
    <ProductScreenLayout title={ROUTES.FEATURE_PRODUCT}>
      <View className="w-[98%] mx-auto mt-2.5 flex flex-row flex-wrap items-center justify-between">
        {PRODUCTS.filter(product => product?.label === PRODUCT_LABEL.FEATURED).map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product?.name}
            image={product?.image}
            price={product?.price}
            discountPrice={product?.discount_price}
            totalRatings={product?.rating?.total_ratings}
          />
        ))}
      </View>
    </ProductScreenLayout>
  );
}

export default FeatureProductScreen;
