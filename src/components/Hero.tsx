import { palette } from '@/const/palette'
import { StyleSheet, View, Text, Image } from 'react-native'

const HeroImage = require('@assets/images/Hero-image.png')

type Props = {
    title: string
    subTitle?: string
    body?: string
}
const Hero = ({ title, subTitle, body }: Props) => {
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
