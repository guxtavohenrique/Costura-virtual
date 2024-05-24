import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { theme } from '@/theme'
import { useNavigation } from 'expo-router'


export default function Login(){

    const navigation = useNavigation()

    function handlerSignOut() {
        navigation.navigate("index")
    }

    return(
        <View style={styles.container}>

            <View style={styles.title}>

                <Text style={styles.textTitle}>
                    Conta Google
                </Text>

            </View>

            <Image 
                //source={{ uri: "" }}
                style={{
                    top: 120,
                    width: 200,
                    height: 200,
                    alignSelf: 'center',
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: theme.colors.white
                }}
                />

            <Text style={styles.nameProfile}>
                Gustavo Henrique
            </Text>

            <Text style={styles.emailProfile}>
                gustavosobralmagalhaes@gmail.com
            </Text>

            <TouchableOpacity style={styles.exitButtom} onPress={handlerSignOut}>

                <Text style={styles.textButtom}>
                    Sair da conta
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
    title: {
        top: 80,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 30,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.white
    },
    nameProfile: {
        top: 180,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.white,
    },
    emailProfile: {
        top: 200,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.vermelho
    },
    exitButtom: {
        top: 340,
        width: 320,
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.vermelho
    },
    textButtom: {
        textAlign: 'center',
        fontFamily: theme.fontFamily.medium,
        fontSize: 20,
        color: theme.colors.white,
        padding: 10,
    }
})