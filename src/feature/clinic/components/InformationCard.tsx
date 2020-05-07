import * as React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Images from 'assets/images'
import { StyledText } from 'shared/components/base'
import { Themes } from 'assets/themes'
interface StyledInformationCardProps {
    image?: string
    name: string
    description: string
    isButton?: boolean
    isBoder?: boolean
}
const InformationCard = (props: StyledInformationCardProps) => {
    return (
        <View style={props.isBoder ? styles.containerHasBoder : styles.container}>
            <View style={styles.wrapAvaText}>
                <Image style={styles.imageStyle} source={Images.photo.avatar} />
                <View>
                    <StyledText customStyle={styles.textName}>{props.name}</StyledText>
                    <StyledText customStyle={styles.textName}>{props.description}</StyledText>
                </View>
            </View>
            {props.isButton ? (
                <TouchableOpacity>
                    <StyledText customStyle={styles.changeButton}>{'common.change'}</StyledText>
                </TouchableOpacity>
            ) : null}
        </View>
    )
}
const styles = ScaledSheet.create({
    container: {
        width: '300@s',
        height: '80@vs',
        paddingHorizontal: '25@s',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerHasBoder: {
        width: '325@s',
        height: '80@vs',
        paddingHorizontal: '25@s',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: Themes.COLORS.textSecondary,
        borderRadius: '8@s',
        borderWidth: '1@s',
        justifyContent: 'space-between',
    },
    imageStyle: {
        height: '40@s',
        width: '40@s',
        marginRight: '10@s',
    },
    textName: {
        color: Themes.COLORS.textPrimary,
        fontSize: '14@s',
    },
    textDescription: {
        color: Themes.COLORS.textSecondary,
        fontSize: '14@s',
    },
    wrapAvaText: {
        flexDirection: 'row',
    },
    changeButton: {
        textDecorationLine: 'underline',
    },
})
export default InformationCard
