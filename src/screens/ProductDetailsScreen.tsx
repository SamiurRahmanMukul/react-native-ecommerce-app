import DynamicHeader from '@components/utilities/DynamicHeader';
import { COLORS } from '@utils/constant';
import { PRODUCTS } from '@utils/data';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderMaxHeight = 350;
const HeaderMinHeight = 80;
const ScrollDistance = HeaderMaxHeight - HeaderMinHeight;

function ProductDetailsScreen({ route }: { route: any }): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const { id } = route.params;
  const product = PRODUCTS.find(product => product.id === id);
  const scrollOffsetY = React.useRef(new Animated.Value(0)).current;
  const [visibleDescription, setVisibleDescription] = React.useState(true);

  return (
    <View className="h-screen bg-white dark:bg-black">
      <StatusBar
        backgroundColor={colorScheme === 'dark' ? '#000' : COLORS.GRAY}
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />

      <DynamicHeader
        value={scrollOffsetY}
        HeaderMaxHeight={HeaderMaxHeight}
        HeaderMinHeight={HeaderMinHeight}
        ScrollDistance={ScrollDistance}
      />

      <ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
          useNativeDriver: false,
        })}>
        <View
          style={[
            styles.shadowStyle,
            {
              shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
            },
          ]}>
          <View className="w-11/12 mx-auto my-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[20px] font-font-poppins-semibold text-black dark:text-white mt-2">
                {product?.name}
              </Text>

              <View className="flex flex-row items-center justify-start space-x-2">
                <Text className="text-[20px] font-font-poppins-semibold text-black dark:text-white">
                  {product?.discount_price !== '' ? product?.discount_price : product?.price}
                </Text>

                {product?.discount_price !== '' && (
                  <Text className="text-[16px] font-font-poppins-light text-black dark:text-gray line-through line">
                    {product?.price}
                  </Text>
                )}
              </View>
            </View>

            <View className="flex flex-row items-center justify-start space-x-1 mt-2">
              <Ionicons name="star-sharp" color="#FBBF24" size={28} />
              <Ionicons name="star-sharp" color="#FBBF24" size={28} />
              <Ionicons name="star-sharp" color="#FBBF24" size={28} />
              <Ionicons name="star-half-sharp" color="#FBBF24" size={28} />
              <Ionicons name="star-outline" color="#FBBF24" size={28} />

              <Text className="text-[18px] font-font-poppins-medium text-black dark:text-gray translate-x-1 translate-y-1">
                ({product?.rating?.total_ratings})
              </Text>
            </View>

            <View className="w-full h-[1px] rounded-full bg-[#F3F3F6] mt-5 mb-3" />

            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="text-[18px] font-font-poppins-semibold text-black dark:text-white">
                  Color
                </Text>

                <View className="flex flex-row items-center justify-start space-x-3 mt-2">
                  <TouchableOpacity
                    className="w-[30px] h-[30px] bg-black dark:bg-white rounded-full items-center justify-center"
                    style={[
                      styles.shadowStyle,
                      { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
                    ]}>
                    <Ionicons name="ellipse-sharp" color="#EE6969" size={30} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="w-[30px] h-[30px] bg-black dark:bg-white rounded-full items-center justify-center"
                    style={[
                      styles.shadowStyle,
                      { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
                    ]}>
                    <Ionicons name="ellipse-sharp" color="#E7C0A7" size={30} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="w-[30px] h-[30px] bg-black dark:bg-white rounded-full items-center justify-center"
                    style={[
                      styles.shadowStyle,
                      { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
                    ]}>
                    <Ionicons name="ellipse-sharp" color="#050302" size={30} />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text className="text-[18px] font-font-poppins-medium text-black dark:text-white">
                  Size
                </Text>

                <View className="flex flex-row items-center justify-start space-x-3 mt-2">
                  <TouchableOpacity
                    className="w-[30px] h-[30px] bg-black dark:bg-white rounded-full items-center justify-center"
                    style={[
                      styles.shadowStyle,
                      { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
                    ]}>
                    <Text className="font-font-poppins-bold text-white dark:text-black translate-y-0.5">
                      S
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="w-[30px] h-[30px] bg-black dark:bg-white rounded-full items-center justify-center"
                    style={[
                      styles.shadowStyle,
                      { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
                    ]}>
                    <Text className="font-font-poppins-bold text-white dark:text-black translate-y-0.5">
                      M
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="w-[30px] h-[30px] bg-black dark:bg-white rounded-full items-center justify-center"
                    style={[
                      styles.shadowStyle,
                      { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
                    ]}>
                    <Text className="font-font-poppins-bold text-white dark:text-black translate-y-0.5">
                      L
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="w-full h-[1px] rounded-full bg-[#F3F3F6] mt-5 mb-3" />

            <View className="flex flex-row items-center justify-between">
              <Text className="text-[18px] font-font-poppins-semibold text-black dark:text-white">
                Descripton
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setVisibleDescription(!visibleDescription);
                }}>
                <Ionicons
                  color={colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK}
                  name={visibleDescription ? 'chevron-up-sharp' : 'chevron-down-sharp'}
                  size={30}
                />
              </TouchableOpacity>
            </View>

            <View className="w-full h-[1px] rounded-full bg-[#F3F3F6] mt-3 mb-3" />

            {visibleDescription && (
              <>
                <Text className="text-[14px] text-justify font-font-poppins-regular text-black dark:text-white">
                  Sportswear is no longer under culture, it is no longer indie or cobbled together
                  as it once was. Sport is fashion today. The top is oversized in fit and style, may
                  need to size down.{' '}
                  <Text className="text-primary font-font-poppins-medium underline underline-offset-2">
                    Read more
                  </Text>
                </Text>

                <View className="w-full h-[1px] rounded-full bg-[#F3F3F6] mt-3 mb-3" />
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
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

export default ProductDetailsScreen;
