import { palette } from '@/const/palette'
import { Menu } from '@/types'
import {
    createTable,
    filterByQueryAndCategories,
    getMenuItems,
    saveMenuItems,
} from '@/utils/database-operations'
import { useUpdateEffect } from '@/utils/useUpdateEffect'
import { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    SafeAreaView,
} from 'react-native'

const MENU_LIST_URL =
    'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'

function getImageUrl(name: string) {
    return `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${name}?raw=true`
}

const getMenuData = async () => {
    const response = await fetch(MENU_LIST_URL)
    const { menu } = await response.json()
    // console.log(menuItems);

    return menu as Menu[]
}

type Props = {
    selectedCategories: Array<string>
    querySarch: string
}

const MenuFoodList = ({ selectedCategories, querySarch }: Props) => {
    const [data, setData] = useState<Menu[]>([])

    useEffect(() => {
        const initializeMenu = async () => {
            try {
                await createTable()
                let menuItemsFromDB = await getMenuItems()

                if (!menuItemsFromDB.length) {
                    const menuItems = await getMenuData()
                    saveMenuItems(menuItems)
                    menuItemsFromDB = await getMenuItems()
                }

                console.log('Menu Items:')
                console.log(menuItemsFromDB)

                setData(menuItemsFromDB)
            } catch (e) {
                // Handle error
                console.error('Error on loading menu items: ', e)
            }
        }
        initializeMenu()
    }, [])

    useUpdateEffect(() => {
        const applyFilters = async () => {
            try {
                console.log('Filtering by: ', selectedCategories.join())
                const menuItems = await filterByQueryAndCategories(
                    querySarch,
                    selectedCategories
                )

                setData(menuItems)
            } catch (e) {
                console.error('Error filtering menu list', e)
            }
        }
        applyFilters()
    }, [selectedCategories, querySarch])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.name}
                renderItem={({ item: menuItem }) => (
                    <View style={styles.foodItemContainer}>
                        <View style={styles.textGroup}>
                            <Text style={styles.textTitle}>
                                {menuItem.name}
                            </Text>
                            <Text style={styles.textBody}>
                                {menuItem.description}
                            </Text>
                            <Text style={styles.textBody}>
                                ${menuItem.price}
                            </Text>
                        </View>
                        <View style={styles.imgContainer}>
                            <Image
                                style={styles.foodImg}
                                source={{ uri: getImageUrl(menuItem.image) }}
                            />
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    foodItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
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
