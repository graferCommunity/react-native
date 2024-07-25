import React from 'react';
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native';
import { TheamColors } from './colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontSizer } from '@/components/fontSizeOptimize';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';

export function QuickTab({ press, isEnable, value, icon, width, frame, navigation }: { press?: any, isEnable?: boolean, value?: string, icon?: any, width?: any, frame?: string, navigation?: any }) {
    useFonts({
        Poppins_400Regular,
    });

    return (
        <TouchableHighlight disabled={isEnable} underlayColor={TheamColors.yellow}
            onPress={() => { frame ? navigation.navigate(frame) : press() }} activeOpacity={1} style={[styles.quickTabButton, { width: width }]} >
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                <MaterialIcons name={icon ? icon : 'search'} size={24} color="black" />
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(10) }} numberOfLines={1} >{value}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    quickTabsMain: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 500,
    },
    quickButtonCover: {
        width: "95%",
        flexDirection: 'row',
        columnGap: 10,
    },
    quickTabButton: {
        padding: 10,
        backgroundColor: TheamColors.gray,
        borderRadius: 10,
        alignItems: 'center',
        paddingStart: 15,
        paddingEnd: 15
    },
});
