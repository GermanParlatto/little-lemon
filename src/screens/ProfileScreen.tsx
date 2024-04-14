import ButtonPrimary from '@/components/ButtonPrimary'
import InputAndLabel from '@/components/InputAndLabel'
import { useContext, useState } from 'react'
import { StyleSheet, View, Image, Alert, Text, ScrollView } from 'react-native'
import { Icon } from '@rneui/themed'
import { palette } from '@/const/palette'
import ButtonSecondary from '@/components/ButtonSecondary'
import storage from '@/hooks/storage'
import { ONBOARDING_STATUS, FIRST_NAME, EMAIL } from '@/const/keys'
import { RootStackParamList } from '@/App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { OnboardingContext } from '@/context/OnboardingContext'
import { UserContext } from '@/context/UserContext'
import AvatarSection from '@/components/AvatarSection'
import CheckBoxAndLabel from '@/components/CheckBoxAndLabel'

const Logo = require('@assets/images/Logo.png')

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>

const ProfileScreen = ({ navigation }: Props) => {
    const { setOnboardingStatus } = useContext(OnboardingContext)
    const { firstName, lastName, phoneNumber, email, setFirstName, setEmail } =
        useContext(UserContext)

    const handleLogOut = async () => {
        await storage.remove({ key: ONBOARDING_STATUS })
        await storage.remove({ key: FIRST_NAME })
        await storage.remove({ key: EMAIL })
        setOnboardingStatus('uncompleted')
        setEmail('')
        setFirstName('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    name="arrow-circle-left"
                    type={'font-awesome'}
                    color={palette.primary.main}
                    size={40}
                />

                <Image source={Logo} />
                <Icon name="arrow-circle-left" type={'font-awesome'} />
            </View>
            <AvatarSection />
            <ScrollView>
                <InputAndLabel
                    label={'First name'}
                    value={firstName}
                    onChangeCallback={(text) => {}}
                />
                <InputAndLabel
                    label={'Last name'}
                    value={lastName}
                    onChangeCallback={(text) => {}}
                />
                <InputAndLabel
                    label={'Email'}
                    value={email}
                    onChangeCallback={(text) => {}}
                />
                <InputAndLabel
                    label={'Phone number'}
                    mask={'(999)-999-999'}
                    value={phoneNumber}
                    onChangeCallback={(text) => {}}
                />
                <Text style={styles.textLabel}>Email notification</Text>
                <CheckBoxAndLabel
                    label={'Order statuses'}
                    value={true}
                    onChangeCallback={() => {}}
                />
                <CheckBoxAndLabel
                    label={'Password changes'}
                    value={true}
                    onChangeCallback={() => {}}
                />
                <CheckBoxAndLabel
                    label={'Special offers'}
                    value={true}
                    onChangeCallback={() => {}}
                />
                <CheckBoxAndLabel
                    label={'Order statuses'}
                    value={true}
                    onChangeCallback={() => {}}
                />
                <View style={styles.rowBottom}>
                    <ButtonPrimary
                        label={'Log out'}
                        onPressCallback={() => handleLogOut()}
                    />
                    <View style={styles.row}>
                        <ButtonSecondary
                            outlined
                            label={'Discard changes'}
                            onPressCallback={() =>
                                Alert.alert('LOG OUT PRESSED')
                            }
                        />
                        <ButtonSecondary
                            label={'Save changes'}
                            onPressCallback={() =>
                                Alert.alert('LOG OUT PRESSED')
                            }
                        />
                    </View>
                </View>
            </ScrollView>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 70,
        paddingHorizontal: 20,
    },
    rowBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textLabel: {
        marginTop: 20,
        paddingLeft: 20,
        fontFamily: 'karla-bold',
        fontSize: 18,
        color: palette.hightlight.dark,
    },
})

export default ProfileScreen
