import { ReactNode, createContext, useState } from 'react'

type OnboardingStatusType = 'completed' | 'uncompleted'
type OnboardingContextType = {
    onboardingStatus: OnboardingStatusType
    setOnboardingStatus: (value: OnboardingStatusType) => void
}

export const OnboardingContext = createContext<OnboardingContextType>({
    onboardingStatus: 'uncompleted',
    setOnboardingStatus: () => {},
})

type Props = {
    children: ReactNode
}

export default function OnboardingProvider({ children }: Props) {
    const [state, setState] = useState<OnboardingStatusType>('uncompleted')

    return (
        <OnboardingContext.Provider
            value={{ onboardingStatus: state, setOnboardingStatus: setState }}
        >
            {children}
        </OnboardingContext.Provider>
    )
}
