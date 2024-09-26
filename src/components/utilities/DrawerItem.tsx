import cn from '@utils/cn';
import { COLORS } from '@utils/constant';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface DrawerItemProps {
  readonly label: string;
  readonly icon: string;
  readonly focused?: boolean;
  readonly onPress: () => void;
}

function DrawerItem({ label, icon, focused = false, onPress }: DrawerItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={cn(
          'w-[94%] flex flex-row items-center justify-start space-x-2 p-2 m-2 rounded-md',
          focused ? 'bg-primary' : 'bg-gray',
        )}>
        <Ionicons
          name={focused ? icon : `${icon}-outline`}
          color={focused ? COLORS.WHITE : COLORS.BLACK}
          size={22}
        />
        <Text
          className={cn(
            'text-[20px] font-font-poppins-medium translate-y-0.5 capitalize',
            focused ? 'text-white' : 'text-black',
          )}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default DrawerItem;
