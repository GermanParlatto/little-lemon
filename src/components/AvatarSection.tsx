import { View, StyleSheet } from 'react-native'
import { AvatarProps, Dialog } from '@rneui/themed'
import { useContext, useState } from 'react'
import { UserContext } from '@/context/UserContext'
import ButtonSecondary from './ButtonSecondary'
import * as ImagePicker from 'expo-image-picker'
import AvatarWithInitials from './AvatarWithInitials'

type Props = {
    size: AvatarProps['size']
}

export default function AvatarSection({ size }: Props) {
    const [openDialog, setOpenDialog] = useState(false)

    const { setImage } = useContext(UserContext)

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
            <AvatarWithInitials
                size={size}
                onPressCallback={() => toggleDialog()}
            />
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
