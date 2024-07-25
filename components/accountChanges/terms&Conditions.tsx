import { StyleSheet, View, Text, ScrollView } from "react-native";
import { FontSizer } from "../fontSizeOptimize";
import {
    Poppins_400Regular,
    useFonts
} from '@expo-google-fonts/poppins';
import { TheamColors } from "../colors";

export function TermsAndConditions() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });
    return (

        <View style={styles.main}>
            <Text style={{ fontSize: FontSizer(25), fontFamily: "Poppins_400Regular" }}>Terms & Conditions</Text>

            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.title}>
                        <Text style={styles.font_two}>Introduction</Text>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.font}>CopyMi app is designed for those who lead a busy life and fail in futures trading. If the process is simply explained here, your binance account will trade through our skilled trading community. It will not harm the account and your money. but</Text>
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.font_two}>User Agreement</Text>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.font}>Please note that copyMi is not responsible for any loss or theft of your Binance assets, as we do not steal your assets. But maybe
                                Unfortunately, trading losses may occur when we trade from your account, which you will bear. If you want to remove it (turn off the auto trade switch)</Text>
                            <Text style={[styles.font, { marginTop: 10 }]}>And if you login to the CopyMi application, you must agree to these terms and conditions, you are in the application only by agreeing to them. If you access the Application without agreeing to the Terms and Conditions for any reason, copyMi confirms that you have agreed to them.</Text>
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.font_two}>Protection & Rights</Text>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.font}>After logging into your account, you have the right to use it 100% correctly and your security is yours and do not share your security data with anyone to protect your account.</Text>
                            <Text style={[styles.font, { marginTop: 10 }]}>BETA & Testing - This app is still in research stage and some bugs may occur. If you have an unsolvable problem, please contact us.</Text>
                        </View>

                        <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(11) }}>Version 1.0 ( beta )</Text>
                            <View style={{ flexDirection: 'row', }}>
                                {/* <Text style={{ color: TheamColors.dark, fontSize: FontSizer(10), fontFamily: 'Poppins_400Regular' }}>Created By Grafer Developers</Text> */}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        width: '100%',
        rowGap: 10
    },
    title: {
        marginLeft: 20,
        width: '90%',
        rowGap: 10,
        marginTop: 10,
    },
    font: {
        fontSize: FontSizer(12),
        fontFamily: "Poppins_400Regular"
    },
    font_two: {
        fontSize: FontSizer(20),
        fontFamily: "Poppins_400Regular"
    }
})