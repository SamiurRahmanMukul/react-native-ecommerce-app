import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface FeatureProductCardProps {
  readonly image: string | any;
  readonly title: string;
  readonly price: string;
}

function FeatureProductCard({ image, title, price }: FeatureProductCardProps): React.JSX.Element {
  return (
    <TouchableOpacity>
      <View className="flex flex-col items-start justify-center mr-5 last:mr-0">
        {typeof image === 'string' ? (
          <Image
            className="w-[200px] h-[250px] object-cover rounded-md bg-white"
            source={{ uri: image }}
          />
        ) : (
          <Image className="w-[200px] h-[250px] object-cover rounded-md bg-white" source={image} />
        )}

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
