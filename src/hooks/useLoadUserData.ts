import { useContext, useEffect } from 'react'
import storage from './storage'
import { FIRST_NAME, EMAIL } from '@/const/keys'
import { UserContext } from '@/context/UserContext'

const useLoadUserData = () => {
    const { setFirstName, setEmail } = useContext(UserContext)
    // console.log('Loading user data...')
    const loadUserData = async () => {
        try {
            const firstName = await storage.load({
                key: FIRST_NAME,
            })

            if (firstName) setFirstName(firstName)

            const email = await storage.load({
                key: EMAIL,
            })

            if (email) setEmail(email)
        } catch (e) {
            console.log('Custom error occourrs on loading async storage:', e)
        }
    }
    useEffect(() => {
        loadUserData()
    }, [])
}

export { useLoadUserData }
