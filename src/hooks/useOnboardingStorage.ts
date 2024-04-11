import { useEffect, useState } from 'react'
import storage from './storage'

const useOnboardingStorage = () => {
    const [isOnboardingCompleted, setIsOboardingCompleted] = useState(false)
    const [isLoadingStorage, setIsLoading] = useState(true)

    const checkOnboardingIsComplete = async () => {
        try {
            const isCompleted = await storage.load({
                key: 'isOnboardingCompleted',
            })
            if (isCompleted) {
                setIsOboardingCompleted(isCompleted)
            }
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        checkOnboardingIsComplete()
    }, [])

    return { isOnboardingCompleted, isLoadingStorage }
}

export { useOnboardingStorage }
