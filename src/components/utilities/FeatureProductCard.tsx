import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';

function FeatureProductCard({
  image,
  title,
  price,
}: {
  image: string | any;
  title: string;
  price: string;
}): React.JSX.Element {
  return (
    <TouchableOpacity>
      <View className="flex flex-col items-start justify-center mr-5 last:mr-0">
        {typeof image === 'string' ? (
          <Image
            className="w-[200px] h-[250px] object-cover rounded-md drop-shadow-md"
            source={{ uri: image }}
          />
        ) : (
          <Image
            className="w-[200px] h-[250px] object-cover rounded-md drop-shadow-md"
            source={image}
          />
        )}

        <Text className="text-[18px] font-font-poppins-semibold text-black mt-2">{title}</Text>
        <Text className="text-[24px] font-font-poppins-semibold text-black">{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default FeatureProductCard;
