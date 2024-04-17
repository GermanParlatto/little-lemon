import { palette } from '@/const/palette'
import { CheckBox } from '@rneui/themed'
import { StyleSheet, View, Text } from 'react-native'

type Props = {
    onChangeCallback: (value: boolean) => void
    value: boolean
    label: string
}
const CheckBoxAndLabel = ({ onChangeCallback, value, label }: Props) => {
    return (
        <View>
            <CheckBox
                checked={value}
                onPress={() => onChangeCallback(!value)}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor={palette.primary.main}
                style={styles.checkbox}
                title={label}
                textStyle={styles.textLabel}
                containerStyle={styles.checkbox}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textLabel: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: palette.hightlight.dark,
    },
    checkbox: {
        margin: 0,
    },
})

export default CheckBoxAndLabel
