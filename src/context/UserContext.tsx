import { ReactNode, createContext, useState } from 'react'

type UserContextType = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    image: string | null

    setFirstName: (value: string) => void
    setLastName: (value: string) => void
    setEmail: (value: string) => void
    setPhoneNumber: (value: string) => void
    setImage: (value: string | null) => void
}

const defaultUserContext: UserContextType = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    image: null,
    setFirstName: (value) => {},
    setLastName: (value) => {},
    setEmail: (value) => {},
    setPhoneNumber: (value) => {},
    setImage: (value) => {},
}

export const UserContext = createContext<UserContextType>(defaultUserContext)

type Props = {
    children: ReactNode
}

export default function UserProvider({ children }: Props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [image, setImage] = useState<string | null>(null)

    console.log('Render User provider...')

    return (
        <UserContext.Provider
            value={{
                firstName,
                lastName,
                email,
                phoneNumber,
                image,
                setFirstName,
                setLastName,
                setEmail,
                setPhoneNumber,
                setImage,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
