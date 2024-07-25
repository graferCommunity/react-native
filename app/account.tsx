import React, { useCallback, useEffect, useRef, useState } from "react";
import { TheamColors } from "@/components/colors";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Platform } from "react-native";
import {
    Poppins_400Regular,
    useFonts
} from '@expo-google-fonts/poppins';
import { FontSizer } from "@/components/fontSizeOptimize";
import { AutoTrade } from "@/components/autoTrade";
import { OptionButton } from "@/components/optionButtons";
import { ExpandOrders } from "@/components/orders";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { NavigationHeadder } from "@/components/navigationHeadder";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { EditableSheet } from "@/components/editableSheet";
export function Account({ navigation }: { navigation: any }) {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const [isEnabledOrder, setEnabledOrder] = useState(false);
    const handleOrderSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            setEnabledOrder(false);
        }
    }, []);

    function makeEnable() {
        setEnabledOrder(true);
    }


    const [whatInterface, setInterface] = useState('');

    const [isEnabled, setEnabled] = useState(false);
    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            setEnabled(false)
        }
    }, []);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const handleClosePress = () => {
        bottomSheetRef.current?.close();
        setTimeout(() => {
            setEnabled(false)
        }, 300);
    }

    const [getClose, setClose] = useState(true);
    useEffect(() => {
        // setInterface('ACESS'); setEnabled(true)
        // setClose(false)
    }, [])


    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
            {fontsLoaded ? (<>
                <View style={styles.main}>
                    <View style={styles.headder}>
                        <NavigationHeadder value="Account" frame="HOME" navigation={navigation} />
                        <View style={{ flexDirection: 'row', columnGap: 10 }}>
                            <View>
                                <Image style={{ width: 100, height: 100, borderRadius: 100 }} source={{ uri: `https://i.pinimg.com/736x/4b/12/e0/4b12e0f5d85344a6856c6743975a6f45.jpg` }} />
                            </View>
                            <View style={{ width: '100%' }}>
                                <View style={{ justifyContent: 'center', height: 'auto' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
                                        <Text style={{ fontSize: FontSizer(20), color: 'white', fontFamily: 'Poppins_400Regular' }} numberOfLines={1}>Indeepa Disanayaka</Text>
                                        <Image style={{ width: 20, height: 20 }} source={require('../assets/images/verifyed.png')} />
                                    </View>
                                    <Text style={{ color: TheamColors.green, fontFamily: 'Poppins_400Regular', fontSize: FontSizer(14) }}>$1400.00</Text>
                                    <Text style={{ color: 'white', fontFamily: 'Poppins_400Regular', fontSize: FontSizer(14) }}>Premium USER</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', alignItems: 'center', position: 'absolute' }}>
                                <View style={{ width: '90%', alignItems: 'center', marginTop: 100 }}>
                                    <AutoTrade color="white" colorTwo="black" touchOpacity={1} trackColor={TheamColors.yellow} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={{ alignItems: 'center', rowGap: 10 }} style={styles.body}>
                        <Text style={styles.headding}>Account</Text>
                        <View style={styles.buttonOptionSlide}>
                            <OptionButton dissable={true} value="Security" navigation={navigation} frame="SECURITY" icon={"lock"} />
                            <OptionButton value="Change Account Datilas" frame="ACCOUNT_CHANGES" navigation={navigation} icon={"manage-accounts"} />
                        </View>
                        <Text style={styles.headding}>Finance</Text>

                        <View style={styles.buttonOptionSlide}>
                            <OptionButton value="Order Datilas" press={makeEnable} icon={"sticky-note-2"} />
                            <OptionButton dissable={true} value="Payment & Subscription" icon={"analytics"} />
                            <OptionButton value="Affiliate Network" press={() => { setInterface('AFFLIATE'); setEnabled(true) }} icon={"insert-link"} />
                            <OptionButton value="Terms and Conditions" press={() => { setInterface('TERMS'); setEnabled(true) }} icon={"label-important"} />
                            <OptionButton value="LogOut" color="red" icon={"logout"} />
                        </View>

                        <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(11) }}>Version 1.0 ( beta )</Text>
                        <NativeBaseProvider>
                            <View style={{ flexDirection: 'row', marginTop: -10 }}>
                                {/* <Text style={{ color: TheamColors.dark, fontSize: FontSizer(10), fontFamily: 'Poppins_400Regular' }}>Created By Grafer Developers</Text> */}
                            </View>
                        </NativeBaseProvider>
                    </ScrollView>
                </View>

                {isEnabled && (<>
                    <TouchableOpacity style={styles.closeEria} activeOpacity={1} onPress={() => { getClose === false ? {} : handleClosePress }}></TouchableOpacity>
                    <EditableSheet ui={whatInterface} onChangeSheet={handleSheetChanges} downClose={getClose} bottomSheetRef={bottomSheetRef} />
                </>)}
                {isEnabledOrder && (<>
                    <ExpandOrders onChangeSheet={handleOrderSheetChanges} />
                </>)}
            </>) : (<>
            </>)}
        </GestureHandlerRootView>

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
    },
    headder: {
        width: '100%',
        minHeight: '15%',
        backgroundColor: TheamColors.dark,
        padding: 20,
        rowGap: 10,
        zIndex: 0,
    },
    body: {
        paddingTop: Platform.OS == "ios" ? '6%' : '10%',
        width: '90%',
        zIndex: -1,
    },
    headding: {
        fontFamily: 'Poppins_400Regular',
        fontSize: FontSizer(20),
        marginTop: 20
    },
    buttonOptionSlide: {
        width: '90%',
        justifyContent: 'center',
        rowGap: 10
    },
    closeEria: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#0000003f',
    }
})