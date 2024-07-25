import { StatusBar, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import {  useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold})

  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 24}}>Hello World</Text>
      </View>
    </NativeBaseProvider>
  );
}
