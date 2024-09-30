import ProductCard from '@components/product/ProductCard';
import ProductScreenLayout from '@layouts/ProductScreenLayout';
import { ROUTES } from '@utils/constant';
import { FEATURE_PRODUCT } from '@utils/data';
import * as React from 'react';
import { View } from 'react-native';

function FeatureProductScreen(): React.JSX.Element {
  return (
    <ProductScreenLayout title={ROUTES.FEATURE_PRODUCT}>
      <View className="w-[98%] mx-auto mt-2.5 mb-12 flex flex-row flex-wrap items-center justify-between">
        {FEATURE_PRODUCT.map(data => (
          <ProductCard
            key={data.id}
            id={data.id}
            name={data?.name}
            image={data?.image}
            price={data?.price}
            discountPrice={data?.discount_price}
            averageRating={data?.rating?.average_rating}
            totalRatings={data?.rating?.total_ratings}
          />
        ))}
      </View>
    </ProductScreenLayout>
  );
}

export default FeatureProductScreen;
