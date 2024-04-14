import { palette } from '@/const/palette'
import { StyleSheet, View, Text, Alert, Pressable } from 'react-native'

type Props = { onPressCallback: () => void; label: string }

const ButtonMenu = ({ onPressCallback, label }: Props) => {
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
        backgroundColor: palette.hightlight.light,
        padding: 10,
        borderRadius: 16,
    },
    buttonText: {
        fontFamily: 'karla-extra-bold',
        fontSize: 14,
        color: palette.primary.main,
        textAlign: 'center',
        textTransform: 'capitalize',
    },
})

export default ButtonMenu
