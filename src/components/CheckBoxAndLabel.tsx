import { palette } from '@/const/palette'
import { CheckBox } from '@rneui/themed'
import { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'

type Props = {
    onChangeCallback: (value: boolean) => void
    value: boolean
    label: string
}
const CheckBoxAndLabel = ({ onChangeCallback, value, label }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <CheckBox
                checked={value}
                onPress={() => onChangeCallback(!value)}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor={palette.primary.main}
            />
            <Text style={styles.textLabel}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textLabel: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: palette.hightlight.dark,
    },
})

export default CheckBoxAndLabel
