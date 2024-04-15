import { palette } from '@/const/palette'
import { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'

const HeroImage = require('@assets/images/Hero-image.png')

const MENU_LIST_URL =
    'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'

function getImageUrl(name: string) {
    return `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${name}?raw=true`
}

type Menu = {
    name: string
    price: number
    description: string
    image: string
    category: string
}

type Props = {
    selected?: string
}
const MenuFoodList = ({ selected }: Props) => {
    const [data, setData] = useState<Menu[]>([])

    useEffect(() => {
        const getMenuListFromAPI = async () => {
            try {
                const res = await fetch(MENU_LIST_URL)
                const data = await res.json()
                setData(data.menu)
            } catch (e) {
                console.error('Error fetching menu list')
            }
        }
        getMenuListFromAPI()
    }, [])

    return (
        <ScrollView style={styles.container}>
            {data.map((menuItem, index) => (
                <View key={index} style={styles.foodItemContainer}>
                    <View style={styles.textGroup}>
                        <Text style={styles.textTitle}>{menuItem.name}</Text>
                        <Text style={styles.textBody}>
                            {menuItem.description}
                        </Text>
                        <Text style={styles.textBody}>${menuItem.price}</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image
                            style={styles.foodImg}
                            source={{ uri: getImageUrl(menuItem.image) }}
                        />
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    foodItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    textGroup: {
        display: 'flex',
        gap: 8,
        width: '74%',
    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    foodImg: {
        width: 82,
        height: 82,
        resizeMode: 'stretch',
    },
    icon: {
        borderWidth: 2,
        borderColor: palette.hightlight.light,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderRightWidth: 0,
        backgroundColor: '#FFF',
    },
    textTitle: {
        fontSize: 20,
        fontFamily: 'karla-bold',
        color: '#333',
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'karla-regular',
        color: '#333',
        flex: 1,
        flexWrap: 'wrap',
    },
})

export default MenuFoodList
