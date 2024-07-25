import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontSizer } from './fontSizeOptimize';

export function NavigationHeadder({ navigation, frame, value, color }: { navigation: any, frame: string, value: string, color?: string }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate(frame) }} hitSlop={5} style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back-ios-new" size={24} color={color ? color : 'white'} />

            </TouchableOpacity>
            <View style={{ width: '90%', alignItems: 'center' }}>
                <Text style={{ fontSize: FontSizer(15), color: color ? color : 'white', alignItems: 'center', fontFamily: 'Poppins_400Regular' }}>{value}</Text>
            </View>
        </View>
    )
}