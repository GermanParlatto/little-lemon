import { useContext, useEffect } from 'react'
import storage from './storage'
import { ONBOARDING_STATUS } from '@/const/keys'
import { OnboardingContext } from '@/context/OnboardingContext'

const useOnboardingStorage = () => {
    const { setOnboardingStatus, onboardingStatus } =
        useContext(OnboardingContext)

    const checkOnboardingIsComplete = async () => {
        try {
            const onboardingStatus = await storage.load({
                key: ONBOARDING_STATUS,
            })

            if (onboardingStatus === 'completed') {
                setOnboardingStatus(onboardingStatus)
            }
        } catch (e) {
            console.log('Custom error occourrs on loading async storage:', e)
        }
    }
    useEffect(() => {
        checkOnboardingIsComplete()
    }, [])

    const isOnboardingCompleted = onboardingStatus === 'completed'

    return { isOnboardingCompleted }
}

export { useOnboardingStorage }
