
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { FontSizer } from '../fontSizeOptimize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Poppins_400Regular,
    useFonts,
} from '@expo-google-fonts/poppins';
import { Checkbox, Icon, Input, KeyboardAvoidingView, NativeBaseProvider } from 'native-base';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import React from 'react';
import { TheamColors } from '../colors';
import { TermsAndConditions } from './terms&Conditions';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export function Acess({ bottomSheetRef }: { bottomSheetRef: any }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const handleClosePress = () => {
        bottomSheetRef.current?.close();
    }

    const Login = () => (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
            {fontsLoaded ? (<>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <View style={{ width: '95%', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE EMAIL ADDRESS : </Text>
                        </View>
                        <Input
                            width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                            focusOutlineColor={'black'} keyboardType='email-address' focusable={true}
                            bgColor={'white'} />
                        <View style={{ width: '95%', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE PASSWORD : </Text>
                        </View>
                        <Input
                            width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                            focusOutlineColor={'black'} keyboardType='ascii-capable' focusable={true}
                            bgColor={'white'} />

                        <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Checkbox hitSlop={20} value="orange" colorScheme="green" size="sm" icon={<Icon as={<MaterialCommunityIcons name="bullseye" />} />}>
                                <Text style={{ fontSize: FontSizer(12), fontFamily: 'Poppins_400Regular' }}>
                                    I agree to all terms & conditions
                                </Text>
                                <TouchableOpacity style={{}}>
                                    <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(12) }}>( Read T&C )</Text>
                                </TouchableOpacity>
                            </Checkbox>
                        </View>
                        <View style={{ width: '95%' }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10), color: 'red' }}>!important : This app is in beta state, so if you forgot your password, contact us because there is no way to forget password in beta state.</Text>
                        </View>
                    </View>
                </View>
            </>) : (<></>)}
        </KeyboardAvoidingView>
    );

    const SignUp = () => (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
            {fontsLoaded ? (<>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <View style={{ width: '95%', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE NAME : </Text>
                        </View>
                        <Input
                            width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                            focusOutlineColor={'black'} keyboardType='default' focusable={true}
                            bgColor={'white'} />
                        <View style={{ width: '95%', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE EMAIL ADDRESS : </Text>
                        </View>
                        <Input
                            width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                            focusOutlineColor={'black'} keyboardType='email-address'
                            bgColor={'white'} />
                        <View style={{ width: '95%', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE PASSWORD : </Text>
                        </View>
                        <Input
                            width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                            focusOutlineColor={'black'} keyboardType='email-address' secureTextEntry={true}
                            bgColor={'white'} />

                        <View style={{ width: '95%', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }}>TYPE IT PASSWORD AGAIN : </Text>
                        </View>
                        <Input
                            width={'95%'} fontSize={FontSizer(15)} fontFamily={'Poppins_400Regular'}
                            focusOutlineColor={'black'} keyboardType='email-address' secureTextEntry={true}
                            bgColor={'white'} />

                        <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Checkbox hitSlop={20} value="orange" colorScheme="green" size="sm" icon={<Icon as={<MaterialCommunityIcons name="bullseye" />} />}>
                                <Text style={{ fontSize: FontSizer(12), fontFamily: 'Poppins_400Regular' }}>
                                    I agree to all terms & conditions
                                </Text>
                                <TouchableOpacity style={{}}>
                                    <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(12) }}>( Read T&C )</Text>
                                </TouchableOpacity>
                            </Checkbox>
                        </View>
                        <View style={{ width: '95%' }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10), color: 'red' }}>!important : This app is in beta state, so if you forgot your password, contact us because there is no way to forget password in beta state.</Text>
                        </View>
                    </View>
                </View>
            </>) : (<></>)}
        </KeyboardAvoidingView>
    );
    const Terms = () => (
        <View style={{ flex: 1 }}>
            <TermsAndConditions />
        </View>
    );

    const renderScene = SceneMap({
        Login: Login,
        SignUp: SignUp,
        Terms: Terms,
    });

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Login', title: 'Login' },
        { key: 'SignUp', title: 'SignUp' },
        { key: 'Terms', title: 'T&C' },
    ]);

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            android_ripple={{ color: 'transparent' }}
            activeColor='transparent'
            indicatorStyle={{ backgroundColor: 'black' }}
            style={{ backgroundColor: 'transparent' }}
            renderLabel={({ route }) => (

                <>
                    <Text style={{ color: TheamColors.black, fontSize: FontSizer(15) }}>{route.title}</Text>
                </>
            )}

        />
    );



    return (
        <NativeBaseProvider >
            {fontsLoaded ? (<>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <View style={{ flexDirection: 'row', width: '95%' }}>
                            <Text style={{ fontSize: FontSizer(15), width: '80%', fontFamily: 'Poppins_400Regular' }}>Acess Your Account</Text>
                            <TouchableOpacity hitSlop={15} onPress={handleClosePress}>
                                <Text style={{ fontSize: FontSizer(15), fontFamily: 'Poppins_400Regular' }}>Acess Now</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', flex: 1 }}>
                            <TabView
                                navigationState={{ index, routes }}
                                renderScene={renderScene}
                                onIndexChange={setIndex}
                                renderTabBar={renderTabBar}
                                initialLayout={{ width: layout.width }}
                            />

                        </View>
                    </View>
                </View>
            </>) : (<></>)}
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
        flex: 1
    },

})