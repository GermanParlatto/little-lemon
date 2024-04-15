import { RootStackParamList } from '@/App'
import Hero from '@/components/Hero'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'
import MenuBreakdown from '@/components/MenuBreakdown'
import MenuFoodList from '@/components/FoodMenuList'
import Header from '@/components/Header'

const title = 'Little Lemon'
const subTitle = 'Chicago'
const textBody = `We are a family owned Mediterranean restaurant,
focused on traditional recipes served with a modern twist.`

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    return (
        <View style={styles.container}>
            <Header onPressAvatar={() => navigation.navigate('Profile')} />

            <Hero title={title} subTitle={subTitle} body={textBody} />

            <MenuBreakdown />

            <MenuFoodList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        marginTop: 40,
    },
})

export default HomeScreen
