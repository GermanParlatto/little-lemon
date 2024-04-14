import { RootStackParamList } from '@/App'
import ButtonPrimary from '@/components/ButtonPrimary'
import Hero from '@/components/Hero'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View, Image } from 'react-native'

const Logo = require('@assets/images/Logo.png')

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <Hero title={'Home'} />
            <View style={styles.rowBottom}>
                <ButtonPrimary
                    label={'Go to Profile'}
                    onPressCallback={() => navigation.navigate('Profile')}
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
