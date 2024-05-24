import { useRef } from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import BottomSheet from '@gorhom/bottom-sheet';
import { theme } from "@/theme";
import { Menu } from "@/components/Menu";
import { View } from "react-native";

export default function StackLayout() {

    const bottomSheetRef = useRef<BottomSheet>(null)

    const handlerBottomSheetOpen = () => bottomSheetRef.current?.expand()
    const handlerBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)


    return(
        
        <View style={{ flex: 1 }}>

            <Tabs
            screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: theme.colors.white,
            tabBarInactiveTintColor: theme.colors.gray[700],
            tabBarStyle: {
                height: 50,
                backgroundColor: theme.colors.black,
                borderColor: theme.colors.black,
                paddingLeft: 30,
                paddingRight: 30,
            }
            }}>
            
            <Tabs.Screen 
            name="home"
            options={{
                tabBarIcon: ({ color }) => <Feather name="home" size={30} color={color}/>
            }}
            />

            <Tabs.Screen 
            name="menu" 
            options={{
                tabBarIcon: ({ color }) => <Feather name="edit" size={30} color={color}/>
            }}
            listeners={() => ({
                tabPress: (event) => {
                    event.preventDefault()
                    handlerBottomSheetOpen()
                }
            })}
            />

            <Tabs.Screen 
            name="profile"
            options={{
                tabBarIcon: ({ color }) => <Feather name="user" size={30} color={color}/>
            }} 
            />

            </Tabs> 

            <Menu ref={bottomSheetRef} onClose={ handlerBottomSheetClose } />

        </View>
        
    )
}

