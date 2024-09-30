import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@utils/constant';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface FeatureProductCardProps {
  readonly id: number;
  readonly image: string | any;
  readonly title: string;
  readonly price: string;
}

function FeatureProductCard({
  id,
  image,
  title,
  price,
}: FeatureProductCardProps): React.JSX.Element {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTES.PRODUCT_ROUTER, {
          screen: ROUTES.PRODUCT_DETAILS,
          params: { id },
        })
      }>
      <View className="flex flex-col items-start justify-center mr-5 last:mr-0">
        <Image
          className="w-[200px] h-[250px] object-cover rounded-md bg-white"
          source={typeof image === 'string' ? { uri: image } : image}
        />

        <Text className="text-[18px] font-font-poppins-semibold mt-2 text-black dark:text-white">
          {title}
        </Text>
        <Text className="text-[24px] font-font-poppins-semibold text-black dark:text-white">
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default FeatureProductCard;
