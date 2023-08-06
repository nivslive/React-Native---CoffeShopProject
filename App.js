import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';
import { themeColors } from "./themes";
import { MapPinIcon } from 'react-native-heroicons/solid'
import './assets/global.css';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { MyText } from './components/defaults/MyText';
import { MyTextInput } from './components/defaults/MyTextInput';

SplashScreen.preventAutoHideAsync();

export default function App() {

  // Button.defaultProps = {
  //   style: {
  //     fontFamily: "Inter-Black",
  //   },
  // };
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/InterBlack.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      
      <View style={styles.container.header}>
      <MyText style={styles.container.header.text}>Olá!</MyText>
        <Text style={styles.container.header.text}>Quantos minutos gostaria de meditar?</Text>
        <View style={styles.container.header.buttons}> 

        <Button
          title="5 minutos"
          style={styles.container.header.button}
          onPress={() => Alert.alert('Right button pressed')}
        />

        <Button
          title="10 minutos"
          style={styles.container.header.button}
          onPress={() => Alert.alert('Right button pressed')}
        />

        <Button
          title="15 minutos"
          style={styles.container.header.button}
          onPress={() => Alert.alert('Right button pressed')}
        />

        </View>

      </View>
      <SafeAreaView/>

        <View> 
            <MyTextInput placeholder='bora tenta' />
            <StatusBar/>
            <Image source={require('./assets/images/beansBackground1.png')}
            className="w-10 absolute top-0"
            style={{position: "absolute", top: "0", height: 220}} 
            />
        </View>

        <SafeAreaView className="flex-1">

            <Image source={require('./assets/images/avatar.png')} 
                className="h-9 w-9 rounded-full"
            />

            <View className="flex-row items-center space-x-2">
                <Text className="text-base font-bold"> New York, NYC</Text>
            </View>

        </SafeAreaView>
      {/* <HomeScreen/> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      display: "flex",
      fontFamily: "Inter-Black",
      backgroundColor: '#fff',
      alignItems: 'center',
      width: "100vw",
      header: {
        backgroundColor: "blue",
        width: "100vw",
        padding: "20px",
        buttons: {
          display: "flex",
          flexDirection: "row",
          gap: 20,
          paddingTop: "10px",
          justifyContent: "center",
        },
        text: {
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        }
      },
    },
});