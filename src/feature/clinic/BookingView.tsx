import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import InformationCard from './components/InformationCard'
import { StyledText } from 'shared/components/base'
const BookingView = () => {
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <InformationCard name={'common.nameOfClinic'} description={'0120-972-335'} isBoder={true} />
                    <StyledText customStyle={styles.styleAboutBooking}>{'common.aboutBooking'}</StyledText>
                    <StyledText customStyle={styles.styleByAppointment}>{'common.byAppointment'}</StyledText>
                    <Text style={styles.styleInfor}>
                        *ご来院の前に、ご希望の診察時間をご連絡ください。
                        *特に、土日祝日・平日18時以降の予約が混みやすくなっています。
                    </Text>
                </View>
                <View style={styles.wrapHowToBooking}>
                    <StyledText>{'common.howToBooking'}</StyledText>
                    <View style={styles.wrapPhoneNumber}>
                        <StyledText customStyle={styles.stylePhoneText}>{'common.phone'}</StyledText>
                        <StyledText customStyle={styles.styleNumberPhone}>{'0120-972-335'}</StyledText>
                    </View>
                    <View style={styles.wrapEmail}>
                        <StyledText customStyle={styles.stylePhoneText}>{'common.email'}</StyledText>
                        <StyledText customStyle={styles.styleNumberPhone}>{'info@gincli.jp'}</StyledText>
                    </View>
                    <Text style={styles.styleText}>
                        *お電話の方が比較的スムーズに時間調整などのご案内ができますので、なるべくお電話にてお問合せいただきますようお願い致します。
                        *電話・メールの受付時間も診察時間と同様です。
                    </Text>
                </View>
                <View style={styles.wrapconsultationTime}>
                    <StyledText>{'common.consultationTime'}</StyledText>
                    <View style={styles.wrapSunDayAndHoliday}>
                        <StyledText customStyle={styles.styleDayText}>{'common.sunDayAndHoliday'}</StyledText>
                        <View>
                            <Text style={styles.styleTextTime}>午前：11時～14時</Text>
                            <Text style={styles.styleTextTime}>午後：15時～19時</Text>
                        </View>
                    </View>
                    <View style={styles.wrapCloseDay}>
                        <StyledText customStyle={styles.styleDayText}>{'common.closeDay'}</StyledText>
                        <View>
                            <Text style={styles.styleTextTime}>水曜日・年末年始</Text>
                        </View>
                    </View>
                    <View style={styles.wrapTimeStartEnd}>
                        <StyledText>{'*受付開始時間は診察開始時間の10分前です。'}</StyledText>
                        <StyledText>{'*最終受付は診察終了時間の30分前です。'}</StyledText>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = ScaledSheet.create({
    container: {
        paddingTop: '109@vs',
        paddingHorizontal: '25@s',
        paddingBottom: '20@vs',
        borderBottomWidth: 0.7,
    },
    styleAboutBooking: {
        marginTop: '31@vs',
    },
    styleByAppointment: {
        marginTop: '20@vs',
        fontSize: 20,
    },
    styleInfor: {
        marginTop: '20@vs',
    },
    wrapHowToBooking: {
        paddingVertical: '30@vs',
        paddingHorizontal: '25@s',
        borderBottomWidth: 0.7,
    },
    wrapPhoneNumber: {
        flexDirection: 'row',
        paddingTop: '18@vs',
        alignItems: 'center',
    },
    wrapEmail: {
        flexDirection: 'row',
        paddingTop: '8@vs',
        alignItems: 'center',
    },
    styleNumberPhone: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '30@vs',
        textDecorationLine: 'underline',
    },
    stylePhoneText: {
        fontSize: 14,
    },
    styleText: {
        marginTop: '20@vs',
    },
    wrapconsultationTime: {
        paddingTop: '20@vs',
        paddingHorizontal: '25@s',
    },
    wrapSunDayAndHoliday: {
        paddingTop: '20@vs',
        flexDirection: 'row',
    },
    styleDayText: {
        width: '121@s',
        fontSize: 16,
        fontWeight: 'bold',
    },
    styleTextTime: {
        marginLeft: '20@s',
        fontSize: 16,
        fontWeight: 'bold',
    },
    wrapCloseDay: {
        paddingTop: '20@vs',
        flexDirection: 'row',
    },
    wrapTimeStartEnd: {
        paddingTop: '20@vs',
    },
})
export default BookingView
