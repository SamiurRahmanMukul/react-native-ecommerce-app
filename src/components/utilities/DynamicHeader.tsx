import ProductDetailsSlider from '@components/product/ProductDetailsSlider';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@utils/constant';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DynamicHeader({
  value,
  HeaderMaxHeight,
  HeaderMinHeight,
  ScrollDistance,
}: {
  value: any;
  HeaderMaxHeight: number;
  HeaderMinHeight: number;
  ScrollDistance: number;
}): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const navigation: any = useNavigation();

  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, ScrollDistance],
    outputRange: [HeaderMaxHeight, HeaderMinHeight],
    extrapolate: 'clamp',
  });

  /* const animatedHeaderColor = value.interpolate({
    inputRange: [0, ScrollDistance],
    outputRange: ['#181D31', '#678983'],
    extrapolate: 'clamp',
  }); */

  return (
    <Animated.View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: animatedHeaderHeight,
        backgroundColor: colorScheme === 'dark' ? '#000' : COLORS.GRAY,
      }}>
      <ProductDetailsSlider />

      <TouchableOpacity
        className="absolute top-5 left-5 w-[45px] h-[45px] bg-black dark:bg-white rounded-full items-center justify-center"
        style={[
          styles.shadowStyle,
          { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
        ]}
        onPress={() => navigation.goBack()}>
        <Ionicons
          color={colorScheme === 'dark' ? COLORS.BLACK : COLORS.WHITE}
          name="chevron-back-outline"
          size={30}
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="absolute top-5 right-5 w-[45px] h-[45px] bg-black dark:bg-white rounded-full items-center justify-center"
        style={[
          styles.shadowStyle,
          { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
        ]}>
        <Ionicons
          color={colorScheme === 'dark' ? COLORS.BLACK : COLORS.WHITE}
          name="heart-outline"
          size={30}
        />
      </TouchableOpacity>
    </Animated.View>
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

export default DynamicHeader;
