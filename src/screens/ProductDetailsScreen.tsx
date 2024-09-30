import * as React from 'react';
import { Text, View } from 'react-native';

function ProductDetailsScreen(): React.JSX.Element {
  return (
    <View className="flex-1 flex flex-col items-center justify-center">
      <Text className="text-center font-font-poppins-light text-[14px] text-black dark:text-white">
        Product Details Screen!
      </Text>
    </View>
  );
}

export default ProductDetailsScreen;
