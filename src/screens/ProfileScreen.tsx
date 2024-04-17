import ButtonPrimary from '@/components/ButtonPrimary'
import InputAndLabel from '@/components/InputAndLabel'
import { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Alert, Text, ScrollView } from 'react-native'
import { palette } from '@/const/palette'
import ButtonSecondary from '@/components/ButtonSecondary'
import storage from '@/hooks/storage'
import { ONBOARDING_STATUS, PROFILE_DATA } from '@/const/keys'
import { RootStackParamList } from '@/App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { OnboardingContext } from '@/context/OnboardingContext'
import AvatarSection from '@/components/AvatarSection'
import CheckBoxAndLabel from '@/components/CheckBoxAndLabel'
import { Profile } from '@/types'
import useProfileData from '@/hooks/useProfileData'
import { UserContext } from '@/context/UserContext'

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
    const { setOnboardingStatus } = useContext(OnboardingContext)
    const { image } = useContext(UserContext)
    const { profileData, updateProfile } = useProfileData()

    // console.log({ profileData })

    const handleLogOut = async () => {
        await storage.remove({ key: ONBOARDING_STATUS })
        await storage.remove({ key: PROFILE_DATA })
        setOnboardingStatus('uncompleted')
    }

    const handleSaveChanges = async () => {
        const newProfile = { ...profileData, ['image']: image }
        // console.log({ newProfile })
        await storage.save({ key: PROFILE_DATA, data: newProfile })
        Alert.alert('Changes saved')
    }

    return (
        <View style={styles.container}>
            <AvatarSection size={'large'} />

            <ScrollView>
                <InputAndLabel
                    label={'First name'}
                    value={profileData?.firstName ?? ''}
                    onChangeCallback={(text) =>
                        updateProfile('firstName', text)
                    }
                />
                <InputAndLabel
                    label={'Last name'}
                    value={profileData?.lastName ?? ''}
                    onChangeCallback={(text) => updateProfile('lastName', text)}
                />
                <InputAndLabel
                    label={'Email'}
                    value={profileData?.email ?? ''}
                    onChangeCallback={(text) => updateProfile('email', text)}
                />
                <InputAndLabel
                    label={'Phone number'}
                    mask={'(999)-999-999'}
                    value={profileData?.phoneNumber ?? ''}
                    onChangeCallback={(text) =>
                        updateProfile('phoneNumber', text)
                    }
                />
                <Text style={styles.textLabel}>Email notification</Text>
                <CheckBoxAndLabel
                    label={'Order statuses'}
                    value={profileData?.orderStatus ?? true}
                    onChangeCallback={(value) =>
                        updateProfile('orderStatus', value)
                    }
                />
                <CheckBoxAndLabel
                    label={'Password changes'}
                    value={profileData?.passwordChanges ?? true}
                    onChangeCallback={(value) =>
                        updateProfile('passwordChanges', value)
                    }
                />
                <CheckBoxAndLabel
                    label={'Special offers'}
                    value={profileData?.specialOffers ?? true}
                    onChangeCallback={(value) =>
                        updateProfile('specialOffers', value)
                    }
                />
                <CheckBoxAndLabel
                    label={'Newsletter'}
                    value={profileData?.newsletter ?? true}
                    onChangeCallback={(value) =>
                        updateProfile('newsletter', value)
                    }
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
                            onPressCallback={() => handleSaveChanges()}
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
        paddingTop: 20,
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
