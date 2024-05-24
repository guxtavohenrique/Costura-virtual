import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'

import { 
    useFonts, 
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold
}   from '@expo-google-fonts/roboto'

SplashScreen.preventAutoHideAsync()

export default function Layout() {

    const [fontsLoaded] = useFonts({
        Roboto_400Regular, 
        Roboto_500Medium, 
        Roboto_700Bold,
    })

    if(fontsLoaded){
        SplashScreen.hideAsync()
    }

    return (

        <GestureHandlerRootView style={{ flex: 1 }}>

            <StatusBar translucent={true}/>

            { fontsLoaded &&

            <Stack screenOptions={{ headerShown: false }}>

                <Stack.Screen name="index"/>

                <Stack.Screen name="(tabs)"/>

            </Stack>
            
            }

        </GestureHandlerRootView>

    )
}