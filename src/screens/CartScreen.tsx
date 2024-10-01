import CartProductCard from '@components/product/CartProductCard';
import TabScreenLayout from '@layouts/TabScreenLayout';
import { COLORS } from '@utils/constant';
import { PRODUCT_LABEL, PRODUCTS } from '@utils/data';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function CartScreen(): React.JSX.Element {
  const { colorScheme } = useColorScheme();

  return (
    <TabScreenLayout title="Your Cart">
      <View className="w-[94%] mx-auto">
        {PRODUCTS.filter(product => product?.label === PRODUCT_LABEL.FEATURED).map(product => (
          <CartProductCard key={product?.id} product={product} />
        ))}
      </View>

      <View
        className="w-[94%] mx-auto bg-gray rounded-md mt-3 mb-[140px]"
        style={[
          styles.shadowStyle,
          { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
        ]}>
        <View className="p-4 flex flex-row items-center justify-between">
          <Text className="text-[18px] font-font-poppins-light text-black">Product Price</Text>

          <Text className="text-[18px] font-font-poppins-medium text-black">$ 100.00</Text>
        </View>

        <View className="w-[94%] mx-auto h-[1px] rounded-full bg-black" />

        <View className="p-4 flex flex-row items-center justify-between">
          <Text className="text-[18px] font-font-poppins-light text-black">Shipping Cost</Text>

          <Text className="text-[18px] font-font-poppins-medium text-black">$ 10.00</Text>
        </View>

        <View className="w-[94%] mx-auto h-[1px] rounded-full bg-black" />

        <View className="p-4 flex flex-row items-center justify-between">
          <Text className="text-[18px] font-font-poppins-light text-black">Sub Total</Text>

          <Text className="text-[18px] font-font-poppins-medium text-black">$ 110.00</Text>
        </View>

        <TouchableOpacity className="w-[94%] mx-auto mb-4 h-[50px] rounded-full bg-black items-center justify-center">
          <Text className="text-[18px] font-font-poppins-medium text-white">
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </TabScreenLayout>
  );
}

const styles = StyleSheet.create({
  shadowStyle: {
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default CartScreen;
