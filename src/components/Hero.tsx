import { palette } from '@/const/palette'
import { StyleSheet, View, Text, Image } from 'react-native'
import SearchBar from '@/components/SearchBar'
import debounce from 'lodash.debounce'
import { useCallback, useMemo, useState } from 'react'

const HeroImage = require('@assets/images/Hero-image.png')

type Props = {
    title: string
    subTitle?: string
    body?: string
    onQuerySearch?: (text: string) => void
}
const Hero = ({ title, subTitle, body, onQuerySearch }: Props) => {
    const [searchBarText, setSearchBarText] = useState('')

    const lookup = useCallback((q: string) => {
        if (onQuerySearch) onQuerySearch(q)
    }, [])

    const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup])

    const handleSearchChange = (text: string) => {
        setSearchBarText(text)
        debouncedLookup(text)
    }
    return (
        <View style={styles.hero}>
            <View style={styles.row}>
                <Text style={styles.textTitle}>{title}</Text>
            </View>

            {subTitle && body && (
                <View style={styles.row}>
                    <View style={{ width: '60%' }}>
                        <Text style={styles.textSubuTitle}>{subTitle}</Text>
                        <Text style={styles.textBody}>{body}</Text>
                    </View>
                    <Image style={styles.heroImg} source={HeroImage} />
                </View>
            )}

            {subTitle && !body && (
                <View style={styles.row}>
                    <Text style={styles.textSubuTitle}>{subTitle}</Text>
                </View>
            )}
            {onQuerySearch && (
                <SearchBar
                    value={searchBarText}
                    onChangeCallback={(text) => handleSearchChange(text)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    hero: {
        backgroundColor: palette.primary.main,
        paddingBottom: 20,
    },
    heroImg: {
        width: 140,
        height: 140,
        borderRadius: 8,
        resizeMode: 'stretch',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    textTitle: {
        fontFamily: 'markazi-regular',
        fontSize: 58,
        fontWeight: '500',
        color: palette.primary.second,
    },
    textSubuTitle: {
        fontFamily: 'markazi-regular',
        fontSize: 40,
        color: palette.hightlight.light,
    },
    textBody: {
        fontFamily: 'karla-regular',
        fontSize: 16,
        color: palette.hightlight.light,
    },
})

export default Hero
