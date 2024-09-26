import FeatureProductCard from '@components/utilities/FeatureProductCard';
import HomeCategory from '@components/utilities/HomeCategory';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@utils/constant';
import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen(): React.JSX.Element {
  const navigation: any = useNavigation();

  return (
    <View className="justify-center items-center">
      {/* header section */}
      <View className="w-11/12 flex flex-row items-center justify-between py-5">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color={COLORS.BLACK} />
        </TouchableOpacity>

        <Text className="text-[22px] text-black font-font-poppins-medium">Gemstore</Text>
        <Ionicons name="notifications-outline" size={30} color={COLORS.BLACK} />
      </View>

      {/* category section */}
      <View className="mt-5 w-11/12 flex flex-row items-center justify-around">
        <HomeCategory title="Woman" icon="woman" active />
        <HomeCategory title="Men" icon="man" />
        <HomeCategory title="Accessories" icon="recording-sharp" />
        <HomeCategory title="Beauty" icon="sparkles" />
      </View>

      {/* featured section */}
      <View className="w-11/12 mt-5">
        <View className="flex flex-row items-center justify-between my-3">
          <Text className="text-[26px] font-font-poppins-medium text-black">Feature Product</Text>

          <TouchableOpacity>
            <Text className="text-[20px] font-font-poppins-regular">Show all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row items-center justify-between" style={{ width: '100%' }}>
            <FeatureProductCard
              image={require('@assets/images/feature-1.png')}
              title="Knight Sweater"
              price="$ 60.00"
            />
            <FeatureProductCard
              image={require('@assets/images/feature-2.png')}
              title="Long Sleeve Dress"
              price="$ 45.00"
            />
            <FeatureProductCard
              image={require('@assets/images/feature-3.png')}
              title="Sportwear Set"
              price="$ 80.00"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
