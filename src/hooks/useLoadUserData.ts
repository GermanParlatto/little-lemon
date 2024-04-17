import { useContext, useEffect } from 'react'
import { UserContext } from '@/context/UserContext'
import useProfileData from './useProfileData'
import storage from './storage'
import { PROFILE_DATA } from '@/const/keys'
import { Profile } from '@/types'

const useLoadUserData = () => {
    const { setFirstName, setImage } = useContext(UserContext)

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const profile = await storage.load<Profile>({
                    key: PROFILE_DATA,
                })
                if (profile && profile.firstName)
                    setFirstName(profile.firstName)

                if (profile && profile.image) setImage(profile.image)
            } catch (e) {
                console.log('Custom error loading async storage:', e)
            }
        }
        loadUserData()
    }, [])
}

export { useLoadUserData }
