import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@utils/constant';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CartScreen(): React.JSX.Element {
  const navigation: any = useNavigation();

  return (
    <View className="justify-center items-center">
      {/* header section */}
      <View className="w-11/12 flex flex-row items-center justify-between py-5">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color={COLORS.BLACK} />
        </TouchableOpacity>

        <Text className="text-[22px] text-black font-font-poppins-medium">My Cart</Text>
        <Ionicons name="notifications-outline" size={30} color={COLORS.BLACK} />
      </View>
    </View>
  );
}

export default CartScreen;
