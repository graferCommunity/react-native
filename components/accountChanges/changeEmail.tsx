
import { StyleSheet, Text, View } from 'react-native';
import { FontSizer } from '../fontSizeOptimize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Poppins_400Regular,
    useFonts,
} from '@expo-google-fonts/poppins';
import { KeyboardAvoidingView, NativeBaseProvider, TextArea } from 'native-base';

export function ChangeEmail({ bottomSheetRef }: { bottomSheetRef: any }) {
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
                                <Text style={{ fontSize: FontSizer(15), width: '90%', fontFamily: 'Poppins_400Regular' }}>Change Email Address</Text>
                                <TouchableOpacity hitSlop={15} onPress={handleClosePress}>
                                    <Text style={{ fontSize: FontSizer(15), fontFamily: 'Poppins_400Regular' }}>Save</Text>
                                </TouchableOpacity>
                            </View>
                            <TextArea autoCompleteType={null}
                                width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                                focusOutlineColor={'black'} keyboardType='email-address' focusable={true}
                                bgColor={'white'} />
                            <View style={{ width: '95%' }}>
                                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>Make sure to add your valid email address while adding email address. The email address is required if you access this account again.</Text>
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