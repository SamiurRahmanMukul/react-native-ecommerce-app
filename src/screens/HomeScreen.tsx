import HomeCategory from '@components/utilities/HomeCategory';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@utils/constant';
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen(): React.JSX.Element {
  const navigation: any = useNavigation();

  return (
    <View className="justify-center items-center">
      <View className="w-11/12 flex flex-row items-center justify-between py-5">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color={COLORS.BLACK} />
        </TouchableOpacity>

        <Text className="text-[22px] text-black font-font-poppins-medium">Gemstore</Text>
        <Ionicons name="notifications-outline" size={30} color={COLORS.BLACK} />
      </View>

      <View className="mt-5 w-11/12 flex flex-row items-center justify-around">
        <HomeCategory title="Woman" icon="woman" active />
        <HomeCategory title="Men" icon="man" />
        <HomeCategory title="Accessories" icon="recording-sharp" />
        <HomeCategory title="Beauty" icon="sparkles" />
      </View>
    </View>
  );
}

export default HomeScreen;
