import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@utils/constant';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ProductScreenLayout({
  title,
  children,
}: {
  readonly title: string;
  readonly children?: React.ReactNode;
}): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const navigation: any = useNavigation();

  return (
    <View className="h-screen justify-center items-center bg-white dark:bg-black">
      <StatusBar
        backgroundColor={colorScheme === 'dark' ? '#000' : COLORS.GRAY}
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />

      {/* header section */}
      <View
        className="bg-gray dark:bg-[#000] w-full px-3"
        style={[
          styles.appBarStyle,
          { shadowColor: colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK },
        ]}>
        <View className="flex flex-row items-center justify-start py-5">
          <TouchableOpacity className="-translate-y-0.5" onPress={() => navigation.goBack()}>
            <Ionicons
              color={colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK}
              name="arrow-back"
              size={30}
            />
          </TouchableOpacity>

          <Text className="text-[22px] font-font-poppins-bold capitalize text-black dark:text-white ml-3">
            {title}
          </Text>
        </View>
      </View>

      {/* main section */}
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarStyle: {
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

export default ProductScreenLayout;
