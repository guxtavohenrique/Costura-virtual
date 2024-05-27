import React from "react";
import { theme } from "@/theme";
import { useNavigation } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function SignIn() {

    const navigation = useNavigation()

    async function handlerSignIn() {

        navigation.navigate("entrar")

    }
    async function handlerInscrever() {

        navigation.navigate("inscrever")

    }

    return(

        <View style={styles.container}>

            <ImageBackground source={require('assets/images/background-unsplash.jpg')} resizeMode="cover" style={styles.imageBackground}>

            <View style={styles.areaText}>

                <Text style={styles.textInicio}>
                    Entre em uma conta!
                </Text>

            </View>

            <TouchableOpacity style={styles.buttomSignIn} onPress={handlerSignIn}>

                <Text style={styles.textSignIn}>Entre</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.buttomSignUp} onPress={handlerInscrever}>

               <Text style={styles.textSignUp}>Inscreva-se</Text>

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
        padding: 5,
        alignSelf: 'center'
    },
    textInicio: {
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        fontSize: 60
    },
    buttomSignIn: {
        top: 150,
        width: 310,
        height: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: theme.colors.white
    },
    buttomSignUp: {
        top: 160,
        width: 310,
        height: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: theme.colors.white
    },
    textSignIn: {
        padding: 5,
        fontSize: 20,
        textAlign: 'center',
        color: theme.colors.black,
        fontFamily: theme.fontFamily.medium,
    },
    textSignUp: {
        padding: 5,
        fontSize: 20,
        textAlign: 'center',
        color: theme.colors.black,
        fontFamily: theme.fontFamily.medium
    }
})