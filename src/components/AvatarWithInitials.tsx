import { UserContext } from '@/context/UserContext'
import getInitalsFromNames from '@/utils/getInitalsFromNames'
import { AvatarProps } from '@rneui/base'
import { useContext } from 'react'
import { Avatar } from '@rneui/themed'

type Props = {
    size: AvatarProps['size']
    onPressCallback: VoidFunction
}

export default function AvatarWithInitials({ size, onPressCallback }: Props) {
    const { firstName, image, setImage } = useContext(UserContext)

    const initials = getInitalsFromNames(firstName)

    return (
        <>
            {image ? (
                <Avatar
                    size={size}
                    rounded
                    onPress={() => onPressCallback()}
                    source={{ uri: image }}
                />
            ) : (
                <Avatar
                    size={size}
                    rounded
                    title={initials}
                    onPress={() => onPressCallback()}
                    containerStyle={{ backgroundColor: 'purple' }}
                />
            )}
        </>
    )
}
