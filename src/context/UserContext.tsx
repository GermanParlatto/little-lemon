import { ReactNode, createContext, useState } from 'react'

type UserContextType = {
    image: string | null
    firstName: string
    setImage: (value: string | null) => void
    setFirstName: (value: string) => void
}

const defaultUserContext: UserContextType = {
    firstName: '',
    image: null,
    setFirstName: (value) => {},
    setImage: (value) => {},
}

export const UserContext = createContext<UserContextType>(defaultUserContext)

type Props = {
    children: ReactNode
}

export default function UserProvider({ children }: Props) {
    const [image, setImage] = useState<string | null>(null)
    const [firstName, setFirstName] = useState<string>('')

    console.log('Render User provider...')

    return (
        <UserContext.Provider
            value={{
                firstName,
                image,
                setFirstName,
                setImage,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
