// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Onboarding from './src/screens/Onboarding'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'markazi-regular': require('./assets/fonts/MarkaziText-Regular.ttf'),
        'karla-regular': require('./assets/fonts/Karla-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    if (!fontsLoaded && !fontError) {
        return null
    }
    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Onboarding />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
