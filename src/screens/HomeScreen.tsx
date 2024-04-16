import { RootStackParamList } from '@/App'
import Hero from '@/components/Hero'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'
import MenuBreakdown from '@/components/MenuBreakdown'
import MenuFoodList from '@/components/FoodMenuList'
import Header from '@/components/Header'
import { useState } from 'react'

const title = 'Little Lemon'
const subTitle = 'Chicago'
const textBody = `We are a family owned Mediterranean restaurant,
focused on traditional recipes served with a modern twist.`

const availableCategories = ['starters', 'mains', 'desserts', 'drinks']

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const [querySearch, setQuerySearch] = useState('')
    const [categories, setCategories] =
        useState<Array<string>>(availableCategories)

    const handleCategoryToggle = (category: string) => {
        if (categories.includes(category)) {
            const newCategories = categories.filter((item) => item !== category)
            newCategories.length === 0
                ? setCategories(availableCategories)
                : setCategories(newCategories)
        } else {
            setCategories((prev) => [...prev, category])
        }
    }

    return (
        <View style={styles.container}>
            {/* <Header onPressAvatar={() => navigation.navigate('Profile')} /> */}

            <Hero
                onQuerySearch={(text) => setQuerySearch(text)}
                title={title}
                subTitle={subTitle}
                body={textBody}
            />

            <MenuBreakdown
                categories={availableCategories}
                onToggleCategory={(value) => handleCategoryToggle(value)}
            />

            <MenuFoodList
                selectedCategories={categories}
                querySarch={querySearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
})

export default HomeScreen
