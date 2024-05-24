import { theme } from "@/theme";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {

    const navigation = useNavigation()

    function handlerSignIn() {
        navigation.navigate("(tabs)")
    }

    return(

        <View style={styles.container}>

            <View style={styles.areaText}>

                <Text style={styles.text}>
                    Para começar, entre em uma conta Google!
                </Text>
                

            </View>

            <TouchableOpacity style={styles.buttom} onPress={handlerSignIn}>

                <Text style={styles.textButtom}>
                    Entre em uma conta Google
                </Text>

            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black
    },
    areaText: {
        top: 300,
        padding: 10,
        alignSelf: 'center'
    },
    text: {
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        fontSize: 38
    },
    buttom: {
        top: 540,
        width: 360,
        height: 60,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: theme.colors.white
    },
    textButtom: {
        textAlign: 'center',
        padding: 15,
        fontSize: 22,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.black
    }
})