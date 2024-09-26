import { DrawerContentScrollView } from '@react-navigation/drawer';
import { ROUTES } from '@utils/constant';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import DrawerItem from './DrawerItem';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View className="w-full h-[150px] justify-center items-start bg-gray -translate-y-1 m-2">
        <Image
          className="w-[50px] h-[50px] bg-black p-2 rounded-full"
          source={{ uri: 'https://robohash.org/mail@ashallendesign.co.uk' }}
        />
        <Text className="text-[20px] font-font-poppins-semibold text-black mt-1">Jhon Smith</Text>
        <Text className="text-[14px] font-font-poppins-regular text-black -translate-y-2">
          smith@gmail.com
        </Text>
      </View>

      {props.state.routes.map((route: any, index: number) => {
        return (
          <DrawerItem
            key={index}
            label={route.name === ROUTES.HOME_PAGE ? 'Home' : route.name}
            icon="home"
            focused={props.state.index === index}
            onPress={() => props.navigation.navigate(route.name)}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}
