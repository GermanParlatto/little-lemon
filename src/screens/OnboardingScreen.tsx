import { RootStackParamList } from '@/App'
import ButtonPrimary from '@/components/ButtonPrimary'
import Hero from '@/components/Hero'
import InputAndLabel from '@/components/InputAndLabel'
import { EMAIL, FIRST_NAME, ONBOARDING_STATUS } from '@/const/keys'
import { OnboardingContext } from '@/context/OnboardingContext'
import { UserContext } from '@/context/UserContext'
import storage from '@/hooks/storage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Logo = require('@assets/images/Logo.png')

const title = 'Little Lemon'
const subTitle = 'Chicago'
const textBody = `We are a family owned Mediterranean restaurant,
focused on traditional recipes served with a modern twist.`

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>

const OnboardingScreen = ({ navigation }: Props) => {
    const { setOnboardingStatus } = useContext(OnboardingContext)
    const { firstName, email, setFirstName, setEmail } = useContext(UserContext)

    const completeOnboarding = async (name: string, email: string) => {
        const fieldValids = name !== '' && email !== ''

        if (fieldValids) {
            await storage.save({
                key: ONBOARDING_STATUS,
                data: 'completed',
            })
            await storage.save({ key: FIRST_NAME, data: name })
            await storage.save({ key: EMAIL, data: email })
            setOnboardingStatus('completed')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <Hero title={title} subTitle={subTitle} body={textBody} />
            <InputAndLabel
                label={'First name'}
                value={firstName}
                onChangeCallback={(text) => setFirstName(text)}
            />
            <InputAndLabel
                label={'Email'}
                value={email}
                onChangeCallback={(text) => setEmail(text)}
            />
            <View style={styles.rowBottom}>
                <ButtonPrimary
                    label={'Next'}
                    onPressCallback={() => completeOnboarding(firstName, email)}
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
