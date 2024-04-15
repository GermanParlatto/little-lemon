import { palette } from '@/const/palette'
import { StyleSheet, View, TextInput } from 'react-native'
import { Icon } from '@rneui/themed'

type Props = {
    onChangeCallback: (value: string) => void
    value: string
}
const SearchBar = ({ onChangeCallback, value }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <Icon
                name="search"
                type={'material'}
                color={palette.hightlight.dark}
                size={36}
                style={styles.icon}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={(newText) => onChangeCallback(newText)}
                defaultValue={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    icon: {
        borderWidth: 2,
        borderColor: palette.hightlight.light,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderRightWidth: 0,
        backgroundColor: '#FFF',
    },
    textInput: {
        flex: 1,
        height: 40,
        paddingLeft: 8,
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: palette.hightlight.dark,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderColor: palette.hightlight.light,
        borderRadius: 8,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
})

export default SearchBar
