import { palette } from '@/const/palette'
import { StyleSheet, View, TextInput, Text, ScrollView } from 'react-native'
import ButtonMenu from '@/components/ButtonMenu'

const menuList = ['starters', 'mains', 'deserts', 'drinks']

type Props = {
    onChangeCallback: (value: string) => void
    value: string
}
const MenuBreakdown = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order for delivery!</Text>
            <ScrollView style={styles.pageViewContainer} horizontal>
                {menuList.map((title, index) => (
                    <View key={index} style={{ marginRight: 20 }}>
                        <ButtonMenu label={title} onPressCallback={() => {}} />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        borderBottomWidth: 2,
        borderColor: palette.hightlight.light,
    },
    pageViewContainer: {
        flexDirection: 'row',
        marginTop: 8,
        borderWidth: 0,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        borderWidth: 2,
        borderColor: palette.hightlight.light,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderRightWidth: 0,
        backgroundColor: '#FFF',
    },
    title: {
        height: 18,
        fontSize: 18,
        fontFamily: 'karla-bold',
        color: palette.hightlight.dark,
        textTransform: 'uppercase',
    },
})

export default MenuBreakdown
