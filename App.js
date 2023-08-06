import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { themeColors } from "./themes";
import { MapPinIcon } from 'react-native-heroicons/solid'
import './assets/global.css';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MapPinIcon/>
      <SafeAreaView/>

        <View> 

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
                <MapPinIcon size="25" colors={themeColors.bgLight}/>
                <Text className="text-base font-semibold"> New York, NYC</Text>
            </View>

        </SafeAreaView>
      {/* <HomeScreen/> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
