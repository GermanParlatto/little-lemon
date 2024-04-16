import { palette } from '@/const/palette'
import { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

type Props = { onPressCallback: () => void; label: string }

const ButtonMenu = ({ onPressCallback, label }: Props) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <View>
            {!isActive ? (
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        setIsActive(!isActive)
                        onPressCallback()
                    }}
                >
                    <Text style={styles.buttonText}>{label}</Text>
                </Pressable>
            ) : (
                <Pressable
                    style={styles.button_Clicked}
                    onPress={() => {
                        setIsActive(!isActive)
                        onPressCallback()
                    }}
                >
                    <Text style={styles.buttonText_Clicked}>{label}</Text>
                </Pressable>
            )}
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
    button_Clicked: {
        backgroundColor: palette.primary.main,
        padding: 10,
        borderRadius: 16,
    },
    buttonText_Clicked: {
        fontFamily: 'karla-extra-bold',
        fontSize: 14,
        color: palette.hightlight.light,
        textAlign: 'center',
        textTransform: 'capitalize',
    },
})

export default ButtonMenu
