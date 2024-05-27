import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { theme } from '@/theme'
import { useNavigation } from 'expo-router'


export default function Login(){

    const navigation = useNavigation()

    async function handlerSignOut() {
        navigation.navigate("index")
    }

    return(
        <View style={styles.container}>

            <View style={styles.title}>

                <Text style={styles.textTitle}>
                    Perfil do Usuário
                </Text>

            </View>

            <Text style={styles.cargoProfile}>
                Prestador de serviço
            </Text>

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
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
    },
    cargoProfile: {
        top: 180,
        fontSize: 30,
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium,
    },
    nameProfile: {
        top: 200,
        fontSize: 30,
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium,
    },
    emailProfile: {
        top: 220,
        fontSize: 18,
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium,
    },
    exitButtom: {
        top: 340,
        width: 200,
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
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