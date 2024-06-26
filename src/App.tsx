import 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import { memo, useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useOnboardingStorage } from './hooks/useOnboardingStorage'
import OnboardingScreen from '@/screens/OnboardingScreen'
import ProfileScreen from '@/screens/ProfileScreen'
import HomeScreen from '@/screens/HomeScreen'
import OnboardingProvider from '@/context/OnboardingContext'
import UserProvider from './context/UserContext'
import { useLoadUserData } from './hooks/useLoadUserData'
import Header from './components/Header'

SplashScreen.preventAutoHideAsync()

export type RootStackParamList = {
    Profile: undefined
    Onboarding: undefined
    Home: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigation = memo(function RootNavigation() {
    useLoadUserData()
    const { isOnboardingCompleted } = useOnboardingStorage()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isOnboardingCompleted ? (
                    <>
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                header: ({ navigation }) => (
                                    <Header
                                        showAvar
                                        onPressAvatar={() =>
                                            navigation.navigate('Profile')
                                        }
                                    />
                                ),
                            }}
                        />
                        <Stack.Screen
                            name="Profile"
                            component={ProfileScreen}
                            options={{
                                header: ({ navigation }) => (
                                    <Header
                                        showAvar
                                        onPressBack={() => {
                                            navigation.goBack()
                                        }}
                                    />
                                ),
                            }}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        name="Onboarding"
                        component={OnboardingScreen}
                        options={{
                            header: ({ navigation }) => <Header />,
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
})

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'markazi-regular': require('@assets/fonts/MarkaziText-Regular.ttf'),
        'karla-regular': require('@assets/fonts/Karla-Regular.ttf'),
        'karla-bold': require('@assets/fonts/Karla-Bold.ttf'),
        'karla-extra-bold': require('@assets/fonts/Karla-ExtraBold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    onLayoutRootView()

    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <OnboardingProvider>
            <UserProvider>
                <RootNavigation />
            </UserProvider>
        </OnboardingProvider>
    )
}
