import { NavigationHeadder } from '@/components/navigationHeadder';
import { OptionButton } from '@/components/optionButtons';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    Poppins_400Regular,
    useFonts
} from '@expo-google-fonts/poppins';
import { useCallback, useEffect, useRef, useState } from 'react';
import { EditableSheet } from '@/components/editableSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
export function AccountChanges({ navigation }: { navigation: any }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

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
            <View style={styles.main}>
                {fontsLoaded && (<>
                    <View style={styles.header}>
                        <NavigationHeadder frame='ACCOUNT' color='black' navigation={navigation} value='ACCOUNT CHANGES' />
                    </View>
                    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.body}>
                        <View style={styles.buttonOptionSlide}>
                            <OptionButton press={() => { setInterface('PIC'); setEnabled(true) }} value='Change Picture' />
                            <OptionButton press={() => { setInterface('NAME'); setEnabled(true) }} value='Change Name' />
                            <OptionButton press={() => { setInterface('EMAIL'); setEnabled(true) }} value='Change Email' />
                            <OptionButton press={() => { setInterface('PAW'); setEnabled(true) }} value='Change Password' />
                            <OptionButton press={() => { setInterface('API'); setEnabled(true) }} value='API & SECRECT' />
                        </View>
                    </ScrollView>
                </>)}
            </View>
            {isEnabled && (<>
                    <TouchableOpacity style={styles.closeEria} activeOpacity={1} onPress={() => { getClose === false ? {} : handleClosePress }}></TouchableOpacity>
                    <EditableSheet ui={whatInterface} onChangeSheet={handleSheetChanges} downClose={getClose} bottomSheetRef={bottomSheetRef} />
                </>)}
        </GestureHandlerRootView >
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        rowGap: 10
    },
    header: {
        width: '100%',
        padding: 20,
    },
    body: {
        width: '90%',
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