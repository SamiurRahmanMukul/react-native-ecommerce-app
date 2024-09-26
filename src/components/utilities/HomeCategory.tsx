import cn from '@utils/cn';
import { COLORS } from '@utils/constant';
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HomeCategoryProps {
  readonly title: string;
  readonly icon: string;
  readonly active?: boolean;
}

function HomeCategory({ title, icon, active = false }: HomeCategoryProps): React.JSX.Element {
  return (
    <View className="flex flex-col items-center justify-center space-y-1">
      <View
        className={cn(
          'rounded-full p-1 border-[1px] border-solid',
          active ? 'border-black' : 'border-gray',
        )}>
        <View className={cn('rounded-full p-1', active ? 'bg-black' : 'bg-gray')}>
          <Ionicons name={icon} size={30} color={active ? COLORS.WHITE : COLORS.BLACK} />
        </View>
      </View>

      <Text className="text-[14px] font-font-poppins-light text-black">{title}</Text>
    </View>
  );
}

export default HomeCategory;
