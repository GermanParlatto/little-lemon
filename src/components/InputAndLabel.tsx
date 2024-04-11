import { palette } from '@/const/palette'
import { StyleSheet, View, Text, TextInput } from 'react-native'

type Props = {
    onChangeCallback: (value: string) => void
    value: string
    label: string
}
const InputAndLabel = ({ onChangeCallback, value, label }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>{label}</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(newText) => onChangeCallback(newText)}
                defaultValue={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textLabel: {
        marginBottom: 8,
        fontFamily: 'karla-regular',
        fontSize: 20,
        color: palette.hightlight.dark,
    },
    textInput: {
        fontFamily: 'karla-regular',
        fontSize: 20,
        color: palette.hightlight.dark,
        height: 40,
        borderWidth: 2,
        borderColor: palette.hightlight.light,
        borderRadius: 8,
    },
})

export default InputAndLabel
