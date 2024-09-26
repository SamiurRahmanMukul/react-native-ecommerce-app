import FeatureProductCard from '@components/utilities/FeatureProductCard';
import HomeCategory from '@components/utilities/HomeCategory';
import RecommendedProductCard from '@components/utilities/RecommendedProductCard';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@utils/constant';
import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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

      <ScrollView className="mb-14" showsVerticalScrollIndicator={false}>
        {/* category section */}
        <View className="mt-5 w-11/12 flex flex-row items-center justify-around">
          <HomeCategory title="Woman" icon="woman" active />
          <HomeCategory title="Men" icon="man" />
          <HomeCategory title="Accessories" icon="recording-sharp" />
          <HomeCategory title="Beauty" icon="sparkles" />
        </View>

        {/* featured section */}
        <View className="w-11/12 mt-5 mx-auto">
          <View className="flex flex-row items-center justify-between my-3">
            <Text className="text-[26px] font-font-poppins-medium text-black">Feature Product</Text>

            <TouchableOpacity>
              <Text className="text-[20px] font-font-poppins-light">Show all</Text>
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

        {/* highlights section */}
        <View className="bg-[#F8F8FA] my-2 px-4 w-full flex flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="uppercase text-[17px] font-font-poppins-light">I new collection</Text>
            <Text className="uppercase text-[25px] font-font-poppins-regular">
              Hang out & Party
            </Text>
          </View>

          <Image
            className="flex-1 object-contain"
            source={require('@assets/images/group-frame.png')}
          />
        </View>

        {/* recommended section */}
        <View className="w-11/12 mx-auto">
          <View className="flex flex-row items-center justify-between my-3">
            <Text className="text-[26px] font-font-poppins-medium text-black">Recommended</Text>

            <TouchableOpacity>
              <Text className="text-[20px] font-font-poppins-light">Show all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row items-center justify-between" style={{ width: '100%' }}>
              <RecommendedProductCard
                image={require('@assets/images/recommended-1.png')}
                title="White fashion hoodie"
                price="$ 29.00"
              />

              <RecommendedProductCard
                image={require('@assets/images/recommended-2.png')}
                title="Cotton tShirt"
                price="$ 30.00"
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
