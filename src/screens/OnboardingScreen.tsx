import { RootStackParamList } from '@/App'
import ButtonPrimary from '@/components/ButtonPrimary'
import Hero from '@/components/Hero'
import InputAndLabel from '@/components/InputAndLabel'
import { ONBOARDING_STATUS, PROFILE_DATA } from '@/const/keys'
import { OnboardingContext } from '@/context/OnboardingContext'
import { UserContext } from '@/context/UserContext'
import storage from '@/hooks/storage'
import useProfileData from '@/hooks/useProfileData'
import { Profile } from '@/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

const Logo = require('@assets/images/Logo.png')

const title = 'Little Lemon'
const subTitle = 'Chicago'
const textBody = `We are a family owned Mediterranean restaurant,
focused on traditional recipes served with a modern twist.`

type OnboardingScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'Onboarding'
>

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
    const { setOnboardingStatus } = useContext(OnboardingContext)
    const { setFirstName } = useContext(UserContext)
    const { profileData: profile, updateProfile } = useProfileData()

    const completeOnboarding = async () => {
        const fieldValids = profile?.firstName && profile?.email
        console.log({ profile })
        if (fieldValids) {
            await storage.save({
                key: ONBOARDING_STATUS,
                data: 'completed',
            })
            setOnboardingStatus('completed')
            await storage.save({ key: PROFILE_DATA, data: profile })
            setFirstName(profile.firstName)
        }
    }

    return (
        <View style={styles.container}>
            <Hero title={title} subTitle={subTitle} body={textBody} />
            <InputAndLabel
                label={'First name'}
                value={profile?.firstName ?? ''}
                onChangeCallback={(text) => updateProfile('firstName', text)}
            />
            <InputAndLabel
                label={'Email'}
                value={profile?.email ?? ''}
                onChangeCallback={(text) => updateProfile('email', text)}
            />
            <View style={styles.rowBottom}>
                <ButtonPrimary
                    label={'Next'}
                    onPressCallback={() => completeOnboarding()}
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
