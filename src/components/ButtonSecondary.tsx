import { palette } from '@/const/palette'
import { StyleSheet, View, Text, Alert, Pressable } from 'react-native'

type Props = { onPressCallback: () => void; label: string; outlined?: boolean }

const ButtonSecondary = ({ onPressCallback, label, outlined }: Props) => {
    return (
        <View>
            {outlined ? (
                <Pressable
                    style={styles.buttonOutlined}
                    onPress={() => onPressCallback()}
                >
                    <Text style={styles.buttonTextOutlined}>{label}</Text>
                </Pressable>
            ) : (
                <Pressable
                    style={styles.button}
                    onPress={() => onPressCallback()}
                >
                    <Text style={styles.buttonText}>{label}</Text>
                </Pressable>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: palette.primary.main,
        paddingVertical: 8,
        borderRadius: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    buttonOutlined: {
        backgroundColor: '#FFF',
        paddingVertical: 6,
        borderRadius: 8,
        paddingHorizontal: 14,
        borderColor: palette.primary.main,
        borderWidth: 2,
        borderStyle: 'solid',
    },
    buttonTextOutlined: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: palette.primary.main,
        textAlign: 'center',
    },
})

export default ButtonSecondary
