import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@utils/constant';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface RecommendedProductCardProps {
  readonly id: number;
  readonly image: string | any;
  readonly title: string;
  readonly price: string;
}

export default function RecommendedProductCard({
  id,
  image,
  title,
  price,
}: RecommendedProductCardProps): React.JSX.Element {
  const navigation: any = useNavigation();

  console.log(id, image, title, price);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTES.PRODUCT_ROUTER, {
          screen: ROUTES.PRODUCT_DETAILS,
          params: { id },
        })
      }>
      <View className="bg-gray w-[250px] h-[80px] flex flex-row items-center justify-start rounded-md space-x-2 mr-4 last:mr-0">
        <Image
          className="w-[80px] h-[80px] object-cover bg-white rounded-md"
          source={typeof image === 'string' ? { uri: image } : image}
        />

        <View>
          <Text className="text-[14px] font-font-poppins-semibold text-black mt-2">{title}</Text>
          <Text className="text-[20px] font-font-poppins-semibold text-black">{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
