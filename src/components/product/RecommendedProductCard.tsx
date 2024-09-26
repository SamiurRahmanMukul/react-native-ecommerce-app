import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface RecommendedProductCardProps {
  readonly image: string | any;
  readonly title: string;
  readonly price: string;
}

export default function RecommendedProductCard({
  image,
  title,
  price,
}: RecommendedProductCardProps): React.JSX.Element {
  return (
    <TouchableOpacity>
      <View className="bg-white w-[250px] h-[80px] flex flex-row items-center justify-start rounded-md space-x-2 mr-4 last:mr-0">
        {typeof image === 'string' ? (
          <Image className="w-[80px] h-[80px] object-cover" source={{ uri: image }} />
        ) : (
          <Image className="w-[80px] h-[80px] object-cover" source={image} />
        )}

        <View>
          <Text className="text-[14px] font-font-poppins-semibold text-black mt-2">{title}</Text>
          <Text className="text-[20px] font-font-poppins-semibold text-black">{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
