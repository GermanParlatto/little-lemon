import { RootStackParamList } from '@/App'
import ButtonPrimary from '@/components/ButtonPrimary'
import Hero from '@/components/Hero'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View, Image } from 'react-native'
import MenuBreakdown from '@/components/MenuBreakdown'

const Logo = require('@assets/images/Logo.png')
const title = 'Little Lemon'
const subTitle = 'Chicago'
const textBody = `We are a family owned Mediterranean restaurant,
focused on traditional recipes served with a modern twist.`

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>

            <Hero title={title} subTitle={subTitle} body={textBody} />

            <MenuBreakdown />

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
