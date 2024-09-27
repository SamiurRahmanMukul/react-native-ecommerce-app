import TabScreenLayout from '@layouts/TabScreenLayout';
import { COLORS } from '@utils/constant';
import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen(): React.JSX.Element {
  return (
    <TabScreenLayout title="Discover">
      <View className="flex flex-row items-center justify-between">
        <TextInput
          className="bg-gray w-[82%] h-[50px] rounded-md p-3 font-font-poppins-light text-black"
          style={[styles.shadowProp, { color: COLORS.BLACK }]}
          placeholder="Search"
        />

        <View
          className="w-[50px] h-[50px] bg-gray rounded-md justify-center items-center"
          style={styles.shadowProp}>
          <Ionicons className="p-3" name="options" size={25} color={COLORS.BLACK} />
        </View>
      </View>
    </TabScreenLayout>
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
