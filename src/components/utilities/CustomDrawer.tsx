import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import DrawerItem from './DrawerItem';
import { v4 as uuid } from 'uuid';

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
          jhon_smith@gmail.com
        </Text>
      </View>

      {props.state.routes.map((route: any, index: number) => {
        return (
          <DrawerItem
            key={uuid()}
            label={route.name}
            icon="home"
            focused={props.state.index === index}
            onPress={() => props.navigation.navigate(route.name)}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}
