import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@utils/constant';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileScreen(): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const navigation: any = useNavigation();

  return (
    <View className="h-screen justify-center items-center bg-white dark:bg-black">
      <StatusBar
        backgroundColor={colorScheme === 'dark' ? COLORS.BLACK : COLORS.WHITE}
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />

      {/* header section */}
      <View className="w-11/12 flex flex-row items-center justify-between py-5">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu"
            size={30}
            color={colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK}
          />
        </TouchableOpacity>

        <Text className="text-[22px] font-font-poppins-medium text-black  dark:text-white">
          Profile
        </Text>
        <Ionicons
          name="notifications-outline"
          size={30}
          color={colorScheme === 'dark' ? COLORS.WHITE : COLORS.BLACK}
        />
      </View>

      <ScrollView className="mb-14 w-11/12" showsVerticalScrollIndicator={false}>
        {/* ... */}
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;
