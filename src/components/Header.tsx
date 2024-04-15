import { StyleSheet, View, Image } from 'react-native'
import { Icon } from '@rneui/themed'
import AvatarWithInitials from '@/components/AvatarWithInitials'
import { palette } from '@/const/palette'

const Logo = require('@assets/images/Logo.png')

type Props = {
    onPressAvatar?: VoidFunction
    onPressBack?: VoidFunction
}
export default function Header({ onPressAvatar, onPressBack }: Props) {
    return (
        <View style={styles.header}>
            {onPressBack ? (
                <Icon
                    name="arrow-circle-left"
                    type={'font-awesome'}
                    color={palette.primary.main}
                    size={40}
                    onPress={() => onPressBack()}
                />
            ) : (
                <View></View>
            )}
            <View>
                <Image source={Logo} />
            </View>
            <AvatarWithInitials
                size={'medium'}
                onPressCallback={() => onPressAvatar && onPressAvatar()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        minHeight: 70,
    },
})
