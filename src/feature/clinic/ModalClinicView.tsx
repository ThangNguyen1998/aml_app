import React, { Component, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { StyledText, StyledButton } from 'shared/components/base'
import InformationCard from './components/InformationCard'
import Images from 'assets/images'
import { Themes } from 'assets/themes'
interface ModalClinicViewProps {
    isNoted?: boolean
}
const ModalClinicView = (props: ModalClinicViewProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.styledDateTime}>
                <StyledText>{'common.dateAndTime'}</StyledText>
                <View style={styles.wrapDateTime}>
                    <StyledText customStyle={styles.textDate}>{'2020年'}</StyledText>
                    <StyledText customStyle={styles.textDate}>{'05月'}</StyledText>
                    <StyledText customStyle={styles.textDate}>{'24日'}</StyledText>
                </View>
                <Text style={styles.textDate}>12:30</Text>
                <StyledText customStyle={styles.styleChangeRoom}>{'common.changeRoom'}</StyledText>
            </View>
            <View style={styles.wrapInfor}>
                <InformationCard
                    name={'common.nameOfClinic'}
                    description={'common.descriptionOfCard'}
                    isBoder={false}
                    isButton={false}
                />
                <View style={styles.wrapAdress}>
                    <StyledText>{'common.address'}</StyledText>
                    <StyledText customStyle={styles.addressInfor}>
                        {'〒105-0004 東京都港区新橋1丁目9−5　M-SQUARE Bright 4・5F'}
                    </StyledText>
                    <StyledText customStyle={styles.styleCommuini}>{'common.communicationMethod'}</StyledText>
                    <View style={styles.wrapPhone}>
                        <StyledText customStyle={styles.stylePhoneText}>{'common.phone'}</StyledText>
                        <StyledText customStyle={styles.stylePhoneNumber}>{'0120-972-335'}</StyledText>
                    </View>
                </View>
                {props.isNoted ? (
                    <View>
                        <View style={styles.styleNote}>
                            <Image style={styles.styleIconNote} source={Images.icons.note} />
                            <StyledText customStyle={styles.noteText}>{'common.note'}</StyledText>
                        </View>
                        <StyledButton customStyle={styles.styleTakePhoto} title={'common.takePhoto'}></StyledButton>
                    </View>
                ) : (
                    <View style={styles.wrapConfirm}>
                        <StyledButton
                            customStyle={styles.styleButtonFilm}
                            customStyleText={styles.styleTextFilm}
                            title={'common.filmed'}
                        ></StyledButton>
                        <StyledText customStyle={styles.styleComfirmText}>{'common.confirmOrCorrection'}</StyledText>
                    </View>
                )}
            </View>
        </View>
    )
}
const styles = ScaledSheet.create({
    container: {
        paddingTop: '31@vs',
        paddingHorizontal: '39@s',
    },
    styledDateTime: {
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: '30@vs',
    },
    textDate: {
        fontWeight: 'bold',
        fontSize: '30@vs',
        marginRight: '5@vs',
    },
    wrapDateTime: {
        flexDirection: 'row',
    },
    styleChangeRoom: {
        textDecorationLine: 'underline',
        marginTop: '10@vs',
    },
    wrapInfor: {
        paddingTop: '30@vs',
    },
    wrapAdress: {
        paddingHorizontal: '25@s',
    },
    addressInfor: {
        marginTop: '6@vs',
    },
    styleCommuini: {
        marginTop: '21@vs',
        fontSize: 12,
    },
    wrapPhone: {
        marginTop: '6@vs',
        flexDirection: 'row',
    },
    stylePhoneNumber: {
        marginLeft: '12@s',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 14,
    },
    stylePhoneText: {
        fontSize: 14,
    },
    styleNote: {
        flexDirection: 'row',
        color: '#FF4F9A',
        paddingHorizontal: '25@s',
        paddingTop: '30@vs',
    },
    noteText: {
        marginLeft: '6@s',
        color: '#FF4F9A',
    },
    styleIconNote: {
        width: '14@s',
        height: '14@s',
    },
    styleTakePhoto: {
        marginTop: '30@vs',
    },
    styleButtonFilm: {
        backgroundColor: Themes.COLORS.secondary,
    },
    styleTextFilm: {
        color: Themes.COLORS.textSecondary,
    },
    styleComfirmText: {
        marginTop: '20@vs',
    },
    wrapConfirm: {
        paddingTop: '30@vs',
        alignItems: 'center',
    },
})
export default ModalClinicView
