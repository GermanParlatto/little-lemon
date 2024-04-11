import 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from '@/screens/Onboarding'
import HomeScreen from '@/screens/HomeScreen'
import { useOnboardingStorage } from './hooks/useOnboardingStorage'

SplashScreen.preventAutoHideAsync()
const Stack = createStackNavigator()

export default function App() {
    const { isLoadingStorage, isOnboardingCompleted } = useOnboardingStorage()
    const [fontsLoaded, fontError] = useFonts({
        'markazi-regular': require('@assets/fonts/MarkaziText-Regular.ttf'),
        'karla-regular': require('@assets/fonts/Karla-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError || !isLoadingStorage) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    onLayoutRootView()

    if (!fontsLoaded && !fontError) {
        return null
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onbording">
                {isOnboardingCompleted ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen
                        name="Onbording"
                        component={OnboardingScreen}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
