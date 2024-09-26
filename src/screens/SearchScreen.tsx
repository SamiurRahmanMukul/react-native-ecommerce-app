import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@utils/constant';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen(): React.JSX.Element {
  const navigation: any = useNavigation();

  return (
    <View className="justify-center items-center">
      {/* header section */}
      <View className="w-11/12 flex flex-row items-center justify-between py-5">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color={COLORS.BLACK} />
        </TouchableOpacity>

        <Text className="text-[22px] text-black font-font-poppins-medium">Discover</Text>
        <Ionicons name="notifications-outline" size={30} color={COLORS.BLACK} />
      </View>

      <ScrollView className="mb-14 w-11/12" showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between">
          <TextInput
            className="bg-white w-[82%] h-[50px] rounded-md p-3 font-font-poppins-light text-black"
            style={styles.shadowProp}
            placeholder="Search"
          />

          <View
            className="w-[50px] h-[50px] bg-white rounded-md justify-center items-center"
            style={styles.shadowProp}>
            <Ionicons className="p-3" name="options" size={25} color={COLORS.BLACK} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default SearchScreen;
