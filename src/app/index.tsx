import React from "react";
import { theme } from "@/theme";
import { useNavigation } from "expo-router";
import * as AuthSession from 'expo-auth-session';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function SignIn() {

    const navigation = useNavigation()

    async function handlerSignIn() {

        navigation.navigate("(tabs)")
        
    }

    return(

        <View style={styles.container}>

            <ImageBackground source={require('assets/images/background-unsplash.jpg')} resizeMode="cover" style={styles.imageBackground}>

            <View style={styles.areaText}>

                <Text style={styles.text}>
                    Para começar, entre em uma conta Google!
                </Text>

            </View>

            <TouchableOpacity style={styles.buttom} onPress={handlerSignIn}>

                <Text style={styles.textButtom}>
                    Entre com o Google
                </Text>

            </TouchableOpacity>

            </ImageBackground>

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    areaText: {
        bottom: 100,
        padding: 10,
        alignSelf: 'center'
    },
    text: {
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        fontSize: 60
    },
    buttom: {
        top: 150,
        width: 360,
        height: 60,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: theme.colors.vermelho
    },
    textButtom: {
        textAlign: 'center',
        padding: 15,
        fontSize: 22,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.white
    }
})