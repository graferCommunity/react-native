
import { StyleSheet, Text, View } from 'react-native';
import { FontSizer } from '../fontSizeOptimize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Poppins_400Regular,
    useFonts,
} from '@expo-google-fonts/poppins';
import { Input, KeyboardAvoidingView, NativeBaseProvider } from 'native-base';

export function ChangePassword({ bottomSheetRef }: { bottomSheetRef: any }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const handleClosePress = () => {
        bottomSheetRef.current?.close();
    }
    return (
        <NativeBaseProvider >
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
                {fontsLoaded ? (<>
                    <View style={styles.main}>
                        <View style={styles.header}>
                            <View style={{ flexDirection: 'row', width: '95%' }}>
                                <Text style={{ fontSize: FontSizer(15), width: '90%', fontFamily: 'Poppins_400Regular' }}>Change Password</Text>
                                <TouchableOpacity hitSlop={15} onPress={handleClosePress}>
                                    <Text style={{ fontSize: FontSizer(15), fontFamily: 'Poppins_400Regular' }}>Save</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '95%', marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE CURRENT PASSWORD : </Text>
                            </View>
                            <Input
                                width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                                focusOutlineColor={'black'} keyboardType='ascii-capable' focusable={true}
                                bgColor={'white'}/>
                            <View style={{ width: '95%', marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE NEW PASSWORD : </Text>
                            </View>
                            <Input
                                width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                                focusOutlineColor={'black'} keyboardType='ascii-capable' focusable={true}
                                bgColor={'white'} />
                            <View style={{ width: '95%', marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE CONFORM PASSWORD : </Text>
                            </View>
                            <Input
                                width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                                focusOutlineColor={'black'} keyboardType='ascii-capable' focusable={true}
                                bgColor={'white'}/>
                            <View style={{ width: '95%' }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>Your password must contain at least 8 letters, 2 numbers and 1 symbol.</Text>
                            </View>
                            <View style={{ width: '95%' }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10),color:'red' }}>!important : This app is in beta state, so if you forgot your password, contact us because there is no way to forget password in beta state.</Text>
                            </View>
                        </View>
                    </View>
                </>) : (<></>)}
            </KeyboardAvoidingView>
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