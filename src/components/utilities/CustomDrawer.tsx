import { DrawerContentScrollView } from '@react-navigation/drawer';
import { COLORS } from '@utils/constant';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerItem from './DrawerItem';

export default function CustomDrawer(props: any) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <DrawerContentScrollView {...props}>
      <View className="w-full h-screen">
        <View className="w-full h-[150px] justify-center items-start mx-2 pt-4">
          <Image
            className="w-[50px] h-[50px] bg-black dark:bg-white p-2 rounded-full"
            source={{ uri: 'https://robohash.org/mail@ashallendesign.co.uk' }}
          />
          <Text className="text-[20px] font-font-poppins-semibold text-black dark:text-white mt-1">
            Jhon Smith
          </Text>
          <Text className="text-[14px] font-font-poppins-regular text-black dark:text-white -translate-y-2">
            smith@gmail.com
          </Text>
        </View>

        {props.state.routes.map((route: any, index: number) => {
          return (
            <DrawerItem
              key={index}
              icon="home"
              label={route.name}
              focused={props.state.index === index}
              onPress={() => props.navigation.navigate(route.name)}
            />
          );
        })}

        <TouchableOpacity
          className="bg-black dark:bg-white items-center justify-center rounded-full p-1 m-1 w-[45px] h-[45px] absolute bottom-[75px] left-[15px]"
          onPress={toggleColorScheme}>
          <Ionicons
            name={colorScheme === 'dark' ? 'moon-outline' : 'sunny-sharp'}
            color={colorScheme === 'dark' ? COLORS.BLACK : COLORS.WHITE}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
