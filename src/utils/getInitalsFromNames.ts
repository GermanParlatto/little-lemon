export default function getInitalsFromNames(
    firstName?: string,
    lastName?: string
) {
    if (!firstName && !lastName) return 'NN'

    let result = ''
    if (firstName) {
        result = firstName.slice(0, 1).toUpperCase()
    }

    if (lastName) {
        result.concat(lastName.slice(0, 1).toUpperCase())
    }
    return result
}
