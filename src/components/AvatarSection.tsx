import { View, StyleSheet } from 'react-native'
import { Avatar, Dialog } from '@rneui/themed'
import { useContext, useState } from 'react'
import { UserContext } from '@/context/UserContext'
import ButtonSecondary from './ButtonSecondary'
import * as ImagePicker from 'expo-image-picker'

function getInitials(firstName: string, lastName: string) {
    if (!firstName && !lastName) return 'NN'

    let result = ''
    if (firstName) {
        result = firstName.slice(0, 1).toUpperCase()
    }

    if (firstName) {
        result.concat(lastName.slice(0, 1).toUpperCase())
    }
    return result
}

export default function AvatarSection() {
    const [image, setImage] = useState<null | string>(null)
    const [openDialog, setOpenDialog] = useState(false)
    const { firstName, lastName } = useContext(UserContext)

    const initials = getInitials(firstName, lastName)

    const toggleDialog = () => {
        setOpenDialog(!openDialog)
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
        toggleDialog()
    }

    return (
        <View style={styles.row}>
            {image ? (
                <Avatar
                    size={'large'}
                    rounded
                    onPress={() => toggleDialog()}
                    source={{ uri: image }}
                />
            ) : (
                <Avatar
                    size={'large'}
                    rounded
                    title={initials}
                    onPress={() => toggleDialog()}
                    containerStyle={{ backgroundColor: 'purple' }}
                />
            )}
            <Dialog
                isVisible={openDialog}
                onBackdropPress={() => toggleDialog()}
            >
                <Dialog.Title title="Avatar actions" />
                <Dialog.Actions>
                    <View style={styles.row}>
                        <ButtonSecondary
                            label={'Change'}
                            onPressCallback={() => pickImage()}
                        />
                        <ButtonSecondary
                            outlined
                            label={'Remove'}
                            onPressCallback={() => setImage(null)}
                        />
                    </View>
                </Dialog.Actions>
            </Dialog>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})
