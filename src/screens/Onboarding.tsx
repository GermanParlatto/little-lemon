import ButtonPrimary from '@/components/ButtonPrimary'
import Hero from '@/components/Hero'
import InputAndLabel from '@/components/InputAndLabel'
import { useState } from 'react'
import { StyleSheet, View, Image, Alert } from 'react-native'

const Logo = require('@assets/images/Logo.png')

const title = 'Little Lemon'
const subTitle = 'Chicago'
const textBody = `We are a family owned Mediterranean restaurant,
focused on traditional recipes served with a modern twist.`

const OnboardingScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <Hero title={title} subTitle={subTitle} body={textBody} />
            <InputAndLabel
                label={'First name'}
                value={name}
                onChangeCallback={(text) => setName(text)}
            />
            <InputAndLabel
                label={'Email'}
                value={email}
                onChangeCallback={(text) => setEmail(text)}
            />
            <View style={styles.rowBottom}>
                <ButtonPrimary
                    label={'Next'}
                    onPressCallback={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 70,
    },
    rowBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
})

export default OnboardingScreen
