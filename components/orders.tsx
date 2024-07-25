import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { TheamColors } from './colors';
import { FontSizer } from './fontSizeOptimize';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import {
    Poppins_400Regular,
    useFonts
} from '@expo-google-fonts/poppins';

export function ExpandOrders({ onChangeSheet }: { onChangeSheet?: (index: number) => void }) {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const bottomSheetRef = useRef<BottomSheet>(null);
    const initialLayout = { width: Dimensions.get('window').width };

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'All', title: 'All' },
        { key: 'Profite', title: 'Profite' },
        { key: 'Losed', title: 'Lossed' },
    ]);


    const data = [
        {
            currncy: "BTCUSDT",
            time: "2024-01-01",
            side: "BUY",
            income: "-$750.00",
            status: "profite",
        },
        {
            currncy: "XRPUSDT",
            time: "2025-07-02",
            side: "SHORT",
            income: "+$550.00",
            status: "lossed",

        }
    ]
    const All = () => (
        <FlatList renderItem={orderListStrcture} data={data} contentContainerStyle={{ alignItems: 'center', rowGap: 10 }} style={{ flex: 1, padding: 20 }} />
    );

    const Profite = () => (
        <FlatList renderItem={orderListStrcture} data={data} contentContainerStyle={{ alignItems: 'center', rowGap: 10 }} style={{ flex: 1, padding: 20 }} />
    );
    const Losed = () => (
        <FlatList renderItem={orderListStrcture} data={data} contentContainerStyle={{ alignItems: 'center', rowGap: 10 }} style={{ flex: 1, padding: 20 }} />
    );
    function orderListStrcture({ item }: { item?: any }) {


        return (
            <>

                {index === 2 && item.status === "profite" ? (
                    orderSorting()
                ) : index === 1 && item.status === "lossed" ? (
                    orderSorting()
                ) : index === 0 && (
                    orderSorting()
                    
                )}
            </>
        )



        function orderSorting() {
            return (
                <>
                    <View style={styles.resultBody}>
                        <View>
                            <View style={{ padding: 10, backgroundColor: '#F3F3F3', borderRadius: 100 }}>
                                <MaterialIcons name="currency-exchange" size={28} color={TheamColors.black} />
                            </View>
                        </View>

                        <View style={styles.tradeDatilas}>
                            <Text style={{ fontSize: FontSizer(15),fontFamily:'Poppins_400Regular' }}>{item ? item.currncy : 'EMPTYUSDT'}</Text>
                            <Text style={{ color: '#B5B5B5', fontSize: FontSizer(12),fontFamily:'Poppins_400Regular' }}>{item ? item.time : '0000-00-00'}</Text>
                            <Text style={{ color: '#B5B5B5', fontSize: FontSizer(12),fontFamily:'Poppins_400Regular' }}>{item ? item.side : '---'}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', width: 100 }}>
                            <Text style={{ fontSize: FontSizer(20),fontFamily:'Poppins_400Regular' }}>{item ? item.income : '+$000.0'}</Text>
                        </View>
                    </View>
                </>
            )
        }
    }
    const renderScene = SceneMap({
        All: All,
        Profite: Profite,
        Losed: Losed,
    });

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            android_ripple={{ color: 'transparent' }}
            activeColor='transparent'
            indicatorStyle={{ backgroundColor: 'black' }}
            style={{ backgroundColor: 'transparent' }}
            renderLabel={({ route, focused }) => (
                <>
                    <Text style={{ color: focused ? route.title === "Lossed" ? 'red' : TheamColors.green : TheamColors.black, fontSize: FontSizer(15) }}>{route.title}</Text>
                </>
            )}

        />
    );


    return (
        <>
            <BottomSheet
                ref={bottomSheetRef}
                enablePanDownToClose={true}
                onChange={onChangeSheet}
                snapPoints={["90%", "90%"]}
                style={styles.bottomSheet}
            >
                {fontsLoaded ? (<>
                    <BottomSheetView style={{ flex: 1 }}>
                        <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row' }}>
                            <MaterialIcons name='sticky-note-2' size={24}></MaterialIcons>
                            <Text style={{ fontSize: FontSizer(20),fontFamily:'Poppins_400Regular' }}> Order History</Text>
                        </View>
                        <TabView
                            swipeEnabled={true}
                            initialLayout={initialLayout}
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            renderTabBar={renderTabBar}
                        />
                    </BottomSheetView>
                </>) : (<>
                </>)}
            </BottomSheet>
        </>
    );

}

const styles = StyleSheet.create({
    bottomSheet: {
        flex: 1,
        zIndex: 10,
    },
    resultBody: {
        width: '95%',
        minWidth: '95%',
        borderWidth: 1,
        borderColor: TheamColors.gray,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },

    tradeDatilas: {
        justifyContent: 'center',
        width: '50%',
    }

});
