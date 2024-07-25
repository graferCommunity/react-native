
import { StyleSheet, Text, View } from 'react-native';
import { FontSizer } from '../fontSizeOptimize';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
    Poppins_400Regular,
    useFonts,
} from '@expo-google-fonts/poppins';
import { Input, KeyboardAvoidingView, Link, NativeBaseProvider, TextArea } from 'native-base';

export function ChangeAPISECRECT({ bottomSheetRef }: { bottomSheetRef: any }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const handleClosePress = () => {
        bottomSheetRef.current?.close();
    }
    return (
        <NativeBaseProvider >
            <View style={{ flex: 1 }}>
                {fontsLoaded ? (<>
                    <View style={styles.main}>
                        <View style={styles.header}>
                            <View style={{ flexDirection: 'row', width: '95%' }}>
                                <Text style={{ fontSize: FontSizer(15), width: '90%', fontFamily: 'Poppins_400Regular' }}>Change API & SECRECT</Text>
                                <TouchableOpacity hitSlop={15} onPress={handleClosePress}>
                                    <Text style={{ fontSize: FontSizer(15), fontFamily: 'Poppins_400Regular' }}>Save</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '95%', marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE BINANCE API KEY : </Text>
                            </View>

                            <TextArea autoCompleteType={null}
                                width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                                focusOutlineColor={'black'} keyboardType='ascii-capable' focusable={true}
                                bgColor={'white'} />
                            <View style={{ width: '95%' }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE BINANCE SECRECT KEY</Text>
                            </View>

                            <TextArea autoCompleteType={null}
                                width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                                focusOutlineColor={'black'} keyboardType='ascii-capable' focusable={true}
                                bgColor={'white'} />
                            <View style={{ width: '95%' }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>--</Text>
                            </View>
                            <View style={{ width: '95%' }}>
                                <Link href='https://youtu.be/SlPhMPnQ58k?si=WjKRxnbXWsQjdebW'>How To Get Key</Link>
                            </View>
                        </View>
                    </View>
                </>) : (<></>)}
            </View>
        </NativeBaseProvider>
    )

}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        padding: 20
    },
    header: {
        rowGap: 10,
        alignItems: 'center'
    },

})