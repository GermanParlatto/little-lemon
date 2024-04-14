import { palette } from '@/const/palette'
import { StyleSheet, View, Text, Alert, Pressable } from 'react-native'

type Props = { onPressCallback: () => void; label: string }

const ButtonPrimary = ({ onPressCallback, label }: Props) => {
    return (
        <View>
            <Pressable style={styles.button} onPress={() => onPressCallback()}>
                <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: palette.primary.second,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 16,
    },
    buttonText: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
})

export default ButtonPrimary
