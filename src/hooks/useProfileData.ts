import { PROFILE_DATA } from '@/const/keys'
import { Profile } from '@/types'
import { useEffect, useState } from 'react'
import storage from './storage'

export default function useProfileData() {
    const [profileData, setProfileData] = useState<Profile | null>(null)

    useEffect(() => {
        const readProfileData = async () => {
            try {
                const profile = await storage.load<Profile>({
                    key: PROFILE_DATA,
                })
                setProfileData(profile)
            } catch (e) {
                console.log('Custom error loading async storage:', e)
            }
        }
        readProfileData()
    }, [])

    const updateProfile = (key: string, value: string | boolean) => {
        // console.log('Updating profile key ->', key)
        // console.log('Updating profile value ->', value)
        // @ts-ignore
        setProfileData((prev) => {
            return { ...prev, [key]: value }
        })
    }

    return { profileData, updateProfile }
}
