import InputAndLabel from '@/components/InputAndLabel'
import { palette } from '@/const/palette'
import { useState } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    Button,
    Alert,
    Pressable,
} from 'react-native'

const Logo = require('@assets/images/Logo.png')
const Hero = require('@assets/images/Hero-image.png')

const ProfileScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <Hero title={'Home'} />
            <InputAndLabel
                label={'First name'}
                value={name}
                onChangeCallback={(text) => setName(text)}
            />
            <View style={styles.rowBottom}>
                <View>
                    <Pressable
                        style={styles.button}
                        onPress={() => Alert.alert('Simple Button pressed')}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    hero: {
        backgroundColor: palette.primary.main,
        paddingBottom: 20,
    },
    heroImg: {
        width: 140,
        height: 140,
        borderRadius: 8,
        resizeMode: 'stretch',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
    },
    textTitle: {
        fontFamily: 'markazi-regular',
        fontSize: 58,
        fontWeight: '500',
        color: palette.primary.second,
    },
    textSubuTitle: {
        fontFamily: 'markazi-regular',
        fontSize: 40,
        color: palette.hightlight.light,
    },
    textBody: {
        fontFamily: 'karla-regular',
        fontSize: 16,
        color: palette.hightlight.light,
    },
    inputFiledSection: {
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
    rowBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: palette.primary.second,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 40,
    },
    buttonText: {
        fontFamily: 'karla-regular',
        fontSize: 20,
        color: palette.hightlight.dark,
        textAlign: 'center',
    },
})

export default ProfileScreen
