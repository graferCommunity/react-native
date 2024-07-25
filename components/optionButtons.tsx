import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { TheamColors } from './colors';
import { FontSizer } from './fontSizeOptimize';

export function OptionButton({ icon, value, press, frame, color, dissable, navigation, }: { icon?: any, value?: string, press?: any, frame?: string, color?: string, dissable?: boolean, navigation?: any }) {
    return (
        <TouchableOpacity disabled={dissable} style={[styles.optionButton,{backgroundColor:dissable?"#DEDEDE":"white"}]} activeOpacity={0.6} onPress={() => { frame ? navigation.navigate(frame) : press() }}>
            <View style={{ width: '95%', flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                <MaterialIcons style={{display:icon?'flex':'none'}} size={24} name={icon ? icon : 'question-mark'} color={color ? color : 'black'} />
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(15), color: color ? color : 'black' }}>{value}</Text>
            </View>
            <MaterialIcons  name={ "arrow-forward-ios"} size={20} color={color ? color : TheamColors.gray} />
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({

    optionButton: {

        width: '100%',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.0)',
        flexDirection: 'row',

    }
})