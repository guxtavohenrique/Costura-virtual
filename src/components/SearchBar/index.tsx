import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './styles'
import { theme } from '@/theme'
import { Feather } from '@expo/vector-icons'

export function SearchBar() {

    const onChangeTextString = (value: string ) => {
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.searchBar}
                placeholder='Pesquise aqui...'
                editable
                autoCapitalize='none'
                placeholderTextColor={theme.colors.white}
                onChangeText={onChangeTextString}
            />

        </View>
    );
}