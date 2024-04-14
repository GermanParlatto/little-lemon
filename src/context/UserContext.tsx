import { ReactNode, createContext, useState } from 'react'

type UserContextType = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string

    setFirstName: (value: string) => void
    setLastName: (value: string) => void
    setEmail: (value: string) => void
    setPhoneNumber: (value: string) => void
}

const defaultUserContext: UserContextType = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    setFirstName: (value) => {},
    setLastName: (value) => {},
    setEmail: (value) => {},
    setPhoneNumber: (value) => {},
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

    return (
        <UserContext.Provider
            value={{
                firstName,
                lastName,
                email,
                phoneNumber,
                setFirstName,
                setLastName,
                setEmail,
                setPhoneNumber,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
