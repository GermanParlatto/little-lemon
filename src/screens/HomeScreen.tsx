import ButtonPrimary from '@/components/ButtonPrimary'
import Hero from '@/components/Hero'
import { palette } from '@/const/palette'
import { StyleSheet, View, Image, Alert } from 'react-native'

const Logo = require('@assets/images/Logo.png')

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <Hero title={'Home'} />
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

export default HomeScreen
