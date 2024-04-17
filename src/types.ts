export type Menu = {
    name: string
    price: number
    description: string
    image: string
    category: string
}

export type Profile = {
    image: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    orderStatus: boolean
    passwordChanges: boolean
    specialOffers: boolean
    newsletter: boolean
}
