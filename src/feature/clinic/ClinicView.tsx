import * as React from 'react'
import { View, Image } from 'react-native'
import { StyledText, StyledButton } from 'shared/components/base'
import { ScaledSheet } from 'react-native-size-matters'
import InformationCard from './components/InformationCard'
import Images from 'assets/images'
const ClinicView = () => {
    return (
        <View style={styles.container}>
            <StyledText customStyle={styles.styleSelectedClinic}>{'common.selectedClinic'}</StyledText>
            <InformationCard
                name={'common.nameOfClinic'}
                description={'common.descriptionOfCard'}
                isBoder={true}
                isButton={true}
            />
            <View style={styles.information}>
                <Image source={Images.icons.clinic} />
                <StyledText customStyle={styles.textAppoinment}>{'common.noAppoinment'}</StyledText>
                <StyledButton customStyle={styles.confirmButton} title={'common.confirmMethod'} onPress={() => {}} />
            </View>
        </View>
    )
}
const styles = ScaledSheet.create({
    container: {
        paddingTop: '109@s',
        paddingHorizontal: '25@s',
    },
    styleSelectedClinic: {
        marginBottom: '5@s',
    },
    information: {
        marginTop: '106@s',
        alignItems: 'center',
    },
    textAppoinment: {
        marginTop: '21@vs',
        marginBottom: '30@vs',
    },
    confirmButton: {
        width: '130@s',
        height: '35@vs',
    },
    test: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        elevation: 10,
    },
})
export default ClinicView
