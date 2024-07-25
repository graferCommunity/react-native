import { StyleSheet, Text, View, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { FontSizer } from "../fontSizeOptimize";
import { FlatList } from "react-native-gesture-handler";
import { TheamColors } from "../colors";
import {
    Poppins_400Regular,
    useFonts
} from '@expo-google-fonts/poppins';
import { TouchableOpacity } from "@gorhom/bottom-sheet";
export function AffliateNewtork() {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    function renderReferrals({ item }: { item?: any }) {
        return (

            <View style={styles.affliMain}>
                <View style={{ flexDirection: 'row', columnGap: 5 }}>
                    <Image style={styles.recipientLogo} />
                    <View style={{ justifyContent: 'center', width: '60%' }}>
                        <Text style={{ fontSize: FontSizer(15), fontFamily: 'Poppins_400Regular' }} numberOfLines={1}>Indeepa Disanayaka</Text>
                        <Text style={{ fontSize: FontSizer(10), fontFamily: 'Poppins_400Regular' }}>yyy-mm-dd</Text>
                    </View>
                    <View style={{ justifyContent: 'center', width: 60, alignItems: "flex-end" }}>
                        <Text style={{ fontSize: FontSizer(15), fontFamily: 'Poppins_400Regular' }}>+$1.00</Text>
                    </View>
                </View>
            </View>

        )
    }
    const data = [
        {
            'name': 'lol'
        },
    ]

    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row', width: '95%' }}>
                <Text style={{ fontSize: FontSizer(15), width: '90%', fontFamily: 'Poppins_400Regular' }}>Affliate Network</Text>
            </View>
            {/* qr code */}
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <QRCode value="pdofkdpfk" />
                <Text style={{ fontSize: FontSizer(12), fontFamily: 'Poppins_400Regular' }}>YD8DY-8D7SJD</Text>
            </View>
            {/* list of referrals */}
            <View style={{ width: '100%', padding: 20, height: '100%', alignItems: 'center' }}>
                <View style={{ padding: 10 }}>
                    <Text style={{fontSize:FontSizer(12),color:TheamColors.green,fontFamily:"Poppins_400Regular"}}>Total Amount : $24.00 <TouchableOpacity>
                        <Text>Withdraw</Text>
                        </TouchableOpacity> </Text>
                    <Text style={{ fontSize: FontSizer(20), fontFamily: 'Poppins_400Regular' }}>Your Affliate Network</Text>
                </View>

                <FlatList renderItem={renderReferrals} contentContainerStyle={{ marginTop: 10 }} data={data} />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    affliMain: {
        padding: 10,
        width: '100%',
        minWidth: '100%',
        borderRadius: 5,
        borderColor: TheamColors.gray,
        borderWidth: 1,
    },
    recipientLogo: {
        width: 50,
        height: 50,
        backgroundColor: TheamColors.gray,
        borderRadius: 100,
    }
})