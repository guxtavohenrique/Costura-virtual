import React, { forwardRef, useState } from "react"
import { Image, SafeAreaView, Text, TextInput, View } from "react-native"
import BottomSheet from '@gorhom/bottom-sheet'
import { MenuProps } from "./menu.t"
import { styles } from "./styles"
import { theme } from "@/theme"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ButtonGroup } from '@rneui/themed'
import { Feather } from "@expo/vector-icons"
import * as ImagePicker from 'expo-image-picker'


export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {

    const [picture, setPicture] = useState(null)

    const [image, setImage] = useState(null);

    const openCamera = async () => {
        let picture = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 8],
            quality:1,
        })

        console.log(picture)

        if (!picture.canceled) {
            setPicture(picture.assets[0].uri)
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }
          
    return(

        <BottomSheet 
        ref={ref} 
        index={0} 
        snapPoints={[0.01, '97%']}
        backgroundStyle={styles.container}>

        <View style={styles.content}>

            <View style={styles.header}>

                <Text style={styles.title}>
                    O que você deseja?
                </Text>
                
            </View>
            
        <View style={styles.viewInput}>
            
            <TextInput style={styles.textInput}
                placeholder="Escreva aqui..."
                multiline={true}
                textAlignVertical="top"
                numberOfLines={100}
                autoCorrect
                placeholderTextColor={theme.colors.white}
            />
            
        </View>

        <View style={styles.imageView}>
            
            {picture && <Image source={{uri: picture}} style={styles.foto}/>}

            {image && <Image source={{ uri: image }} style={styles.image}/>}

        </View>
        
        <SafeAreaView style={styles.groupButton}>


                <ButtonGroup
                    textStyle={{
                        color: theme.colors.black
                    }}
                    containerStyle={{
                        top: 30,
                        width: 140,
                        height: 40,
                        borderRadius: 5,
                    }}
                    buttonStyle={{ 
                        padding: 1,
                        backgroundColor: theme.colors.white
                    }}
                    buttons={[
                        
                        <Feather name="camera" size={20} onPress={openCamera}/>,
                        <Feather name="image" size={20} onPress={pickImage}/>

                    ]}
                />


        </SafeAreaView>

        <View style={styles.buttonAcao}>

            <TouchableOpacity style={styles.buttonCancelar} onPress={onClose}>

                <Text style={styles.textCancelarButton}>
                    Cancelar
                </Text>

            </TouchableOpacity>
                
            <TouchableOpacity style={styles.buttonEnviar} onPress={() => ""}>

                <Text style={styles.textEnviarButton}>
                    Enviar
                </Text>

            </TouchableOpacity>

        </View>

        </View>

        </BottomSheet>
        
    )
})