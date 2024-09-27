import FeatureProductCard from '@components/product/FeatureProductCard';
import RecommendedProductCard from '@components/product/RecommendedProductCard';
import HomeCategory from '@components/utilities/HomeCategory';
import TabScreenLayout from '@layouts/TabScreenLayout';
import { COLORS, ROUTES } from '@utils/constant';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }: { readonly navigation: any }): React.JSX.Element {
  const { colorScheme } = useColorScheme();

  return (
    <TabScreenLayout title="Gemstore">
      {/* category section */}
      <View className="my-5 w-11/12 flex flex-row items-center justify-around mx-auto">
        <HomeCategory title="Woman" icon="woman" active />
        <HomeCategory title="Men" icon="man" />
        <HomeCategory title="Accessories" icon="recording-sharp" />
        <HomeCategory title="Beauty" icon="sparkles" />
      </View>

      {/* featured section */}
      <View className="w-11/12 mx-auto">
        <View className="flex flex-row items-center justify-between my-3">
          <Text className="text-[24px] font-font-poppins-medium text-black dark:text-white">
            Feature Product
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FEATURE_PRODUCT)}>
            <Ionicons
              color={colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK}
              name="arrow-forward"
              size={30}
            />
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
          <Text className="uppercase text-[17px] font-font-poppins-light text-black">
            I new collection
          </Text>
          <Text className="uppercase text-[25px] font-font-poppins-regular text-black">
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
          <Text className="text-[24px] font-font-poppins-medium text-black dark:text-white">
            Recommended
          </Text>

          <TouchableOpacity>
            <Ionicons
              color={colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK}
              name="arrow-forward"
              size={30}
            />
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

      {/* top collection section */}
      <View className="w-11/12 mx-auto mt-2 mb-[140px]">
        <View className="flex flex-row items-center justify-between my-3">
          <Text className="text-[24px] font-font-poppins-medium text-black dark:text-white">
            Top Collection
          </Text>

          <TouchableOpacity>
            <Ionicons
              color={colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK}
              name="arrow-forward"
              size={30}
            />
          </TouchableOpacity>
        </View>

        <View className="bg-[#F8F8FA] flex flex-row items-center justify-between rounded-md px-4">
          <View className="flex-1">
            <Text className="text-[20px] font-font-poppins-light capitalize text-black">
              I sale up to 40%
            </Text>
            <Text className="text-[30px] font-font-poppins-thin uppercase text-black">
              For slim and beauty
            </Text>
          </View>

          <Image className="flex-1" source={require('@assets/images/dress-1.png')} />
        </View>

        <View className="bg-[#F8F8FA] flex flex-row items-center justify-between rounded-md px-4 mt-4">
          <View className="flex-1">
            <Text className="text-[20px] font-font-poppins-thin capitalize text-black">
              I summer collection 2021
            </Text>
            <Text className="text-[30px] font-font-poppins-medium uppercase text-black">
              Most sexy fabulous design
            </Text>
          </View>

          <Image className="flex-1" source={require('@assets/images/dress-2.png')} />
        </View>

        <View className="flex flex-row items-center justify-between mt-4">
          <View className="flex-1 bg-[#F8F8FA] rounded-md flex flex-row items-center justify-between mr-2">
            <Image className="flex-1 rounded-md" source={require('@assets/images/dress-3.png')} />
            <View className="flex-1">
              <Text className="text-[18px] font-font-poppins-light text-black">T-Shirts</Text>
              <Text className="text-[24px] font-font-poppins-medium text-black">
                The Office Life
              </Text>
            </View>
          </View>

          <View className="flex-1 bg-[#F8F8FA] rounded-md flex flex-row items-center justify-between">
            <View className="flex-1 ml-2">
              <Text className="text-[18px] font-font-poppins-light text-black">Dresses</Text>
              <Text className="text-[22px] font-font-poppins-medium text-black whitespace-nowrap">
                Elegant Design
              </Text>
            </View>

            <Image className="flex-1 rounded-md" source={require('@assets/images/dress-4.png')} />
          </View>
        </View>
      </View>
    </TabScreenLayout>
  );
}

export default HomeScreen;
