import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { COLORS, ROUTES } from '@utils/constant';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function CartProductCard({ product }: { readonly product: any }): React.JSX.Element {
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);
  const [quantity, setQuantity] = React.useState<number>(1);
  const { colorScheme } = useColorScheme();
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-between space-x-2 mb-2 bg-gray rounded-md"
      style={[
        styles.shadowStyle,
        { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
      ]}
      onPress={() =>
        navigation.navigate(ROUTES.PRODUCT_ROUTER, {
          screen: ROUTES.PRODUCT_DETAILS,
          params: { id: product?.id },
        })
      }>
      <Image
        className="w-[25%] h-[80px] object-cover rounded-l-md bg-white"
        source={product?.image}
        resizeMode="cover"
      />

      <View className="w-[75%]">
        <View className="w-full flex flex-row items-start justify-between pr-4">
          <Text className="text-[16px] text-start font-font-poppins-medium text-black mt-1">
            {product?.name}
          </Text>

          <CheckBox
            className="-translate-x-2"
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => {
              setToggleCheckBox(newValue);
            }}
          />
        </View>

        <View className="w-full flex flex-row items-center justify-between pr-4">
          <View className="flex flex-row items-center justify-start space-x-2">
            <Text className="text-[20px] font-font-poppins-semibold text-black">
              {product?.discount_price !== '' ? product?.discount_price : product?.price}
            </Text>

            {product?.discount_price !== '' && (
              <Text className="text-[16px] font-font-poppins-light text-black line-through line">
                {product?.price}
              </Text>
            )}
          </View>

          <View className="flex flex-row items-center justify-center space-x-2 border-[1px] border-solid border-black h-[40px] px-2 rounded-md">
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity + 1);
              }}>
              <Text className="text-[20px] font-font-poppins-bold text-black">+</Text>
            </TouchableOpacity>

            <TextInput
              className="font-font-poppins-bold text-black text-center text-[12px] translate-y-1"
              value={quantity.toString()}
              onChangeText={text => {
                setQuantity(Number(text));
              }}
              keyboardType="numeric"
            />

            <TouchableOpacity
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                } else {
                  setQuantity(0);
                }
              }}>
              <Text className="text-[20px] font-font-poppins-bold text-black">-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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

export default CartProductCard;
