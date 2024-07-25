import { StyleSheet, Text, View, Image } from 'react-native';
import { FontSizer } from '../fontSizeOptimize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Poppins_400Regular,
    useFonts,
} from '@expo-google-fonts/poppins';
import { KeyboardAvoidingView, NativeBaseProvider } from 'native-base';
import { TheamColors } from '../colors';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export function ProfilePicture({ bottomSheetRef }: { bottomSheetRef: any }) {


    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

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
                                <Text style={{ fontSize: FontSizer(15), width: '90%', fontFamily: 'Poppins_400Regular' }}>Change Account Picture</Text>
                                <TouchableOpacity hitSlop={15} onPress={handleClosePress}>
                                    <Text style={{ fontSize: FontSizer(15), fontFamily: 'Poppins_400Regular' }}>Save</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', rowGap: 30 }}>
                                <TouchableHighlight activeOpacity={0.6} underlayColor={TheamColors.yellow} onPress={pickImage} style={{ borderRadius: 10, width: '100%', height: 40, backgroundColor: TheamColors.gray, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(14) }}>Upload Your Account Picture</Text>
                                </TouchableHighlight>
                                <View style={{ flexDirection: 'row', columnGap: 1 }}>
                                    <View>
                                        <Image source={{ uri: image ? image : 'https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg' }} style={styles.image} />
                                    </View>
                                    <View style={{width:'60%'}}>
                                        <Text style={{fontSize:FontSizer(20),fontFamily:'Poppins_400Regular'}}>Image Polisys : </Text>
                                        <Text style={{fontSize:FontSizer(12),marginLeft:20,fontFamily:'Poppins_400Regular'}}>When adding/changing a picture to your account the picture must not be larger than 5MB and the picture must be of this type (png , jpg , jpeg )</Text>
                                    </View>
                                    
                                </View>
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
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor:TheamColors.gray,
        borderColor:'black',
        borderWidth:1
    },
})