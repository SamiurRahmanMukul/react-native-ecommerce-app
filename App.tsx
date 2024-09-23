/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text className="text-justify m-2 text-[14px] text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus illo iste accusamus.
            Aliquam quia aut dicta quos, sint reiciendis. Sapiente minima soluta, et, a
            exercitationem eos alias unde sint ipsam tempore, nemo consectetur. Consequatur earum
            iusto minus aut non aliquam nihil veniam vel itaque. Asperiores voluptatem voluptate
            harum reprehenderit optio saepe est voluptates magni inventore labore nemo excepturi
            mollitia nesciunt in quod, quidem libero, aperiam eveniet blanditiis deserunt, iste
            earum? Maiores doloribus quod at illo eius. Quis, a ratione sit ipsum quaerat eveniet
            sed. Recusandae sapiente nam exercitationem voluptatibus eveniet aliquam laboriosam quo
            cum perspiciatis culpa nesciunt corrupti, expedita sunt?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
