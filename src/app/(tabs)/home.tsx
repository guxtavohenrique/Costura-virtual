import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { theme } from '@/theme'
import { SearchBar } from '@/components/SearchBar';
import { useNavigation } from 'expo-router';


export default function Home(){

    return(

        <KeyboardAvoidingView style={styles.inner}>
            <View style={styles.container}>

                <View style={styles.titleHome}>

                    <Text style={styles.texTitle}>
                        Olá, fulano
                    </Text>

                </View>

                <SearchBar />

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inner: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: theme.colors.black,
    },
    titleHome: {
        top: 80,
        width: 360,
        padding: 20,
        paddingLeft: 20,
        alignSelf: 'center',
        backgroundColor: theme.colors.gray[800]
    },
    texTitle: {
        fontSize: 40,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.white
    },
    buttom: {
        bottom: 150,
        width: 300,
        height: 50,
        alignSelf: 'center',
        backgroundColor: theme.colors.green
    },
    textButtom: {
        padding: 10,
        fontSize: 20,
        color: theme.colors.white,
        textAlign: 'center',
    }
})