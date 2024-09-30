import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@utils/constant';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ProductCardProps {
  readonly id: number;
  readonly name: string;
  readonly image: string | any;
  readonly price: string;
  readonly discountPrice?: string;
  readonly averageRating?: number;
  readonly totalRatings?: number;
}

function ProductCard({
  id,
  name,
  image,
  price,
  discountPrice,
  averageRating,
  totalRatings,
}: ProductCardProps): React.JSX.Element {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      className="w-[45%] m-[2.5%] rounded-md"
      onPress={() =>
        navigation.navigate(ROUTES.PRODUCT_ROUTER, {
          screen: ROUTES.FEATURE_PRODUCT,
        })
      }>
      <Image
        source={typeof image === 'string' ? { uri: image } : image}
        className="w-full h-[220px] object-cover rounded-md"
      />

      <Text className="text-[16px] font-font-poppins-medium text-black dark:text-white mt-2">
        {name}
      </Text>

      <View className="flex flex-row items-center justify-start space-x-2">
        <Text className="text-[20px] font-font-poppins-semibold text-black dark:text-white">
          {discountPrice !== '' ? discountPrice : price}
        </Text>

        {discountPrice !== '' && (
          <Text className="text-[16px] font-font-poppins-light text-gray line-through line">
            {price}
          </Text>
        )}
      </View>

      <View className="flex flex-row items-center justify-start">
        <Ionicons name="star-sharp" color="#FBBF24" size={18} />
        <Ionicons name="star-sharp" color="#FBBF24" size={18} />
        <Ionicons name="star-sharp" color="#FBBF24" size={18} />
        <Ionicons name="star-half-sharp" color="#FBBF24" size={18} />
        <Ionicons name="star-outline" color="#FBBF24" size={18} />
        <Text className="text-[12px] font-font-poppins-medium text-gray translate-x-1 translate-y-1">
          ({totalRatings})
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCard;
