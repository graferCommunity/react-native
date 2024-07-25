import { PixelRatio, Switch, View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { TheamColors } from './colors';
import { useState } from 'react';

import {
    Poppins_400Regular,
    useFonts
} from '@expo-google-fonts/poppins';


export function AutoTrade({ color, colorTwo, touchOpacity, trackColor }: { color?: string, colorTwo?: string, touchOpacity?: number, trackColor?: string }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const getFontSize = (size: number): number => {
        const fontScale = PixelRatio.getFontScale();
        return size / fontScale;
    };
    return (

        <TouchableOpacity activeOpacity={touchOpacity ? touchOpacity : 0.8} onPress={toggleSwitch} style={[style.switchMain, { backgroundColor: color ? color : TheamColors.black }]}>
            <Text style={{ width: '90%', fontSize: getFontSize(15), fontFamily: 'Poppins_400Regular', color: colorTwo ? colorTwo : 'white' }}>Auto Trade My Balance {isEnabled ? '( ON )' : '( OFF )'}</Text>
            <Switch trackColor={{ false: trackColor ? trackColor : 'white', true: TheamColors.green }}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                ios_backgroundColor="white"
                value={isEnabled}
            />
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
    switchMain: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: TheamColors.black,
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 5,
        paddingBottom: 5,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#999999',
        borderWidth:1
    }
})