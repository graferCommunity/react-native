import { Image, StyleSheet, Text, View, PixelRatio, TouchableOpacity, TouchableHighlight, ScrollView, Button, Pressable } from 'react-native';
import { TheamColors } from '@/components/colors';
import QRCode from 'react-native-qrcode-svg';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BottomSheet from '@gorhom/bottom-sheet';
import { Icon, Link, NativeBaseProvider, Radio } from 'native-base';
import { FontSizer } from '@/components/fontSizeOptimize';

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';
import { AutoTrade } from '@/components/autoTrade';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { QuickTab } from '@/components/quickTabs';
import { ExpandOrders } from '@/components/orders';
import { EditableSheet } from '@/components/editableSheet';

export function HomeScreen({ navigation }: { navigation: any }) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setEnabled(false);
    }
  }, []);

  const [isEnabledOrder, setEnabledOrder] = useState(false);
  const handleOrderSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setEnabledOrder(false);
    }
  }, []);


  const [isEnabled, setEnabled] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,

  });
  const makeEnableOrder = () => {
    setEnabledOrder(true);
  }
  const makeEnable = ({ status }: { status: string }) => {
    if (status === "show") {
      setEnabled(true);
    } else if (status === "hide") {
      setEnabled(false);
    }
  }

  const srpdata = [
    {

    }
  ]



  const [whatInterface, setInterface] = useState('');
  const [isEnabledQuicks, setEnabledQuicks] = useState(false);
  const handleSheetChangesAPI = useCallback((index: number) => {
    if (index === -1) {
      setEnabledQuicks(false)
    }
  }, []);

  const bottomSheetRefAPI = useRef<BottomSheet>(null);
  const handleClosePress = () => {
    bottomSheetRefAPI.current?.close();
    setTimeout(() => {
      setEnabledQuicks(false)
    }, 300);
  }

  const [getClose, setClose] = useState(true);
  useEffect(() => {
    // setInterface('ACESS'); setEnabledQuicks(true)
    // setClose(false)
  }, [])

  const renderSubscription = () => {
    return (
      <NativeBaseProvider>
        {fontsLoaded ? (<>
          <View style={{ flex: 1, padding: 10, alignItems: 'center' }}>
            <View style={styles.subscription_headder}>
              <Image style={{ width: 100, height: 100, backgroundColor: TheamColors.dark, borderRadius: 100 }} source={require(`../assets/images/icon.png`)} />
              <View>
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(18) }}>Welcome To</Text>
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(20), marginLeft: 10, marginTop: -5 }}>CopyMi Subscription</Text>
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(12), marginLeft: 5, marginTop: 0 }}>With Pro Feturers</Text>
              </View>
            </View>
            <View style={{ width: '90%', marginTop: 10 }}>
              <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(15) }}>What Is : </Text>
              <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(12), marginLeft: 20 }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right</Text>
              <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(15), marginTop: 10 }}>Unlock Pro Feature : </Text>
              <FlatList data={data} renderItem={feature} />
              <Radio.Group defaultValue="1" size="lg" name='subscription-duration' style={{ flexDirection: 'row', flexWrap: 'wrap', columnGap: 10, alignItems: 'center' }}>

                <Radio _text={{
                  mx: 2
                }} colorScheme="green" value="1" icon={<Icon as={<MaterialCommunityIcons name="alien" />} />} my={4}>
                  <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(14) }}> 3 Month/$30.00 |</Text>
                </Radio>
                <Radio _text={{
                  mx: 2
                }} colorScheme="red" value="2" icon={<Icon as={<MaterialCommunityIcons name="fire" />} />} my={4}>
                  <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(14) }}>  6 Month/$60.00 |</Text>
                </Radio>
                <Radio colorScheme="warning" _text={{
                  mx: 2
                }} value="3" icon={<Icon as={<MaterialIcons name="currency-bitcoin" />} />} my={0}>
                  <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(14) }}>12 Month/$120.00</Text>
                </Radio>
              </Radio.Group>

            </View>
            <View style={{ width: '90%' }}>
              <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: 5, marginTop: 10, width: "100%", alignItems: 'center', justifyContent: 'center', backgroundColor: '#6100FF', paddingTop: 10, paddingBottom: 10 }}>
                <Text style={{ color: 'white', fontFamily: 'Poppins_400Regular', fontSize: FontSizer(16) }}>Pay & Active Subscription Quickely</Text>
              </TouchableOpacity>
              <View style={{ borderRadius: 5, marginTop: 10, width: "100%", alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(8) }}>Powerd By Stripe</Text>
              </View>
            </View>
          </View>
        </>) : (<>
        </>)}
      </NativeBaseProvider>

    )
  };

  const data = [
    {
      name: "Unlimited Auto Trading.",
    },
    {
      name: "Local App Password.",
    }
  ];



  const feature = ({ item }: { item: any }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, columnGap: 10 }}>
        <Text style={{ fontSize: FontSizer(20) }}>{'\u2043'}</Text>
        <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(12), justifyContent: 'center' }}> {item.name}</Text>
      </View>
    );
  };

  const orderHistoryData = [
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

  const orderHistory = ({ item }: { item: any }) => {
    return (
      <View style={styles.resultBody}>
        <View>
          <View style={{ padding: 10, backgroundColor: '#F3F3F3', borderRadius: 100 }}>
            <MaterialIcons name="currency-exchange" size={28} color={TheamColors.black} />
          </View>
        </View>

        <View style={styles.tradeDatilas}>
          <Text style={{ fontSize: FontSizer(15), fontFamily: 'Poppins_400Regular' }}>{item ? item.currncy : 'EMPTYUSDT'}</Text>
          <Text style={{ color: '#B5B5B5', fontSize: FontSizer(12), fontFamily: 'Poppins_400Regular' }}>{item ? item.time : '0000-00-00'}</Text>
          <Text style={{ color: '#B5B5B5', fontSize: FontSizer(12), fontFamily: 'Poppins_400Regular' }}>{item ? item.side : '---'}</Text>
        </View>
        <View style={{ alignItems: 'flex-end', width: 100 }}>
          <Text style={{ fontSize: FontSizer(20), fontFamily: 'Poppins_400Regular' }}>{item ? item.income : '+$000.0'}</Text>
        </View>
      </View>
    )
  }

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.main} horizontal={false}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {fontsLoaded ? (<>
            <View style={styles.header}>
              <View style={{ width: '50%' }}>
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(18) }}>Hello Indeepa,</Text>
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(23), marginLeft: 10, marginTop: -10 }}>Welcome Back</Text>
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(12), marginTop: -4 }}>Eren money without working hard</Text>
              </View>
              <View style={styles.acLogoCover}>
                <Image source={{ uri: `https://i.pinimg.com/736x/4b/12/e0/4b12e0f5d85344a6856c6743975a6f45.jpg` }} style={styles.acLogo} />
              </View>
            </View>
            <View style={styles.cards}>
              <View style={styles.balanceCard}>
                <View style={styles.cardCenter}>
                  <Text style={[styles.font_and_color, { fontSize: FontSizer(30), fontFamily: 'Poppins_600SemiBold', width: '85%' }]}>VISA</Text>
                  <Text style={[styles.font_and_color, { fontSize: FontSizer(16) }]}>USDT</Text>
                </View>
                <View style={[styles.cardCenter, { marginTop: 10 }]}>
                  <View style={{ width: '75%', marginTop: 10 }}>
                    <Text style={[styles.font_and_color, { fontSize: FontSizer(12), }]}>My Balance</Text>
                    <Text style={[styles.font_and_color, { color: TheamColors.green, fontSize: FontSizer(30), marginLeft: 6 }]}>$1283.00</Text>
                    <View>
                      <Text style={[styles.font_and_color, { fontSize: FontSizer(12), }]}>API KEY</Text>
                      <Text style={[styles.font_and_color, { fontSize: FontSizer(16), marginLeft: 6 }]} numberOfLines={1}>**********************MSx</Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginTop: '-10%' }}>
                    <QRCode value='this is testing qr code "ballo"' backgroundColor='white' color='black' size={60}></QRCode>
                  </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                  <AutoTrade />
                </View>
              </View>
              {/* payment & subscription */}
              <View style={styles.balanceCard}>
                <View style={styles.cardCenter}>
                  <Text style={[styles.font_and_color, { fontSize: FontSizer(20), fontFamily: 'Poppins_600SemiBold', width: '85%' }]}>Payment & Subscription</Text>
                  <TouchableOpacity activeOpacity={0.6}>
                    <NativeBaseProvider>
                      <Link href='https://web.facebook.com/grafer.developers'>
                        <Text style={[styles.font_and_color, { fontSize: FontSizer(14), color: TheamColors.yellow }]}>Support</Text>
                      </Link>
                    </NativeBaseProvider>
                  </TouchableOpacity>
                </View>
                <View style={[styles.cardCenter, { marginTop: 10 }]}>
                  <View style={{ width: '96%', marginTop: 10 }}>
                    <Text style={[styles.font_and_color, { fontSize: FontSizer(12), }]}>Owiner Type</Text>
                    <Text style={[styles.font_and_color, { color: TheamColors.green, fontSize: FontSizer(30), marginLeft: 6 }]}>PREMIUM CARD</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={[styles.font_and_color, { fontSize: FontSizer(12), opacity: 0.5 }]}>Last Subscription : 2024/01/01</Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity onPress={() => { makeEnable({ status: "show" }) }} activeOpacity={0.8} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginTop: '2%', alignItems: 'center' }}>
                  <Text style={[styles.font_and_color, { color: 'black', fontSize: FontSizer(15) }]}>SUBSCRIBE FOR ( 3 MONTHS ) $30.00</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.quickTabsMain}>
              <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: FontSizer(20) }}>Quick Tabs</Text>
              </View>
              <View style={{ width: '100%', flexDirection: 'column', rowGap: 10 }}>
                <View style={styles.quickButtonCover}>
                  <QuickTab frame='ACCOUNT' navigation={navigation} icon='account-balance-wallet' value='Account' width='30%' />
                  <QuickTab frame='SECURITY' navigation={navigation} icon='lock-outline' value='Security' width='25%' isEnable={true} />
                  <QuickTab icon='insert-link' value='Affiliate Network' width='45%' press={() => { setInterface('AFFLIATE'); setEnabledQuicks(true) }} />
                </View>
                <View style={styles.quickButtonCover}>
                  <QuickTab icon='code' value='API & Secrect' press={() => { setInterface('API'); setEnabledQuicks(true) }} />
                  <QuickTab frame='SECURITY' icon='key' value='Two Factor' isEnable={true} />
                  <QuickTab icon='sticky-note-2' value='Orders' press={makeEnableOrder} />
                </View>
              </View>
            </View>
            <View>
              <View style={{ width: '95%', justifyContent: 'center', marginTop: 20, paddingBottom: 80 }}>
                <View style={{ width: '100%', flexDirection: 'row', }}>
                  <Text style={{ width: '50%', fontSize: FontSizer(20) }}>Order History</Text>
                  <View style={{ width: '50%', alignItems: 'flex-end' }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={makeEnableOrder} >
                      <Text style={{ fontSize: FontSizer(15) }}>See All</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                  <FlatList scrollEnabled={false} renderItem={orderHistory} contentContainerStyle={{ rowGap: 10 }} data={orderHistoryData} />
                </View>
              </View>
            </View>
          </>) : (<>
          </>)}
        </View>

      </ScrollView>
      {isEnabledQuicks && (<>
        <TouchableOpacity style={styles.closeEria} activeOpacity={1} onPress={() => (getClose === false ? {} : handleClosePress())}></TouchableOpacity>
        <EditableSheet ui={whatInterface} onChangeSheet={handleSheetChangesAPI} snapPoints={getClose === false && ['85%']} bottomSheetRef={bottomSheetRefAPI} downClose={getClose} />
      </>)}
      {isEnabledOrder && (<>
        <ExpandOrders onChangeSheet={handleOrderSheetChanges} />
      </>)}

      {isEnabled && <>
        <TouchableOpacity onPress={() => { makeEnable({ status: "hide" }) }}
          style={{ flex: 1, backgroundColor: '#0000003f', zIndex: 0, position: 'absolute', width: "100%", height: "100%" }}>
        </TouchableOpacity>
        <BottomSheet
          style={{ zIndex: 1 }}
          backgroundStyle={{ flex: 1, alignItems: 'flex-start', backgroundColor: 'white', }}
          enablePanDownToClose={true}
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={[520]}>
          <FlatList data={srpdata} renderItem={renderSubscription} />
        </BottomSheet>
      </>}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
    paddingStart: 10,
    paddingEnd: 10,
    rowGap: 10,
  },
  font_and_color: {
    fontFamily: 'Poppins_400Regular',
    color: 'white'
  },
  header: {
    width: '100%',
    maxWidth: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 100
  },
  acLogo: {
    width: 100,
    height: 100,
    backgroundColor: TheamColors.gray,
    borderRadius: 100,
  },
  acLogoCover: {
    alignItems: 'center',
  },
  cards: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 500,
    width: '95%',
    rowGap: 10,
    marginTop: 20

  },
  balanceCard: {
    width: '100%',
    backgroundColor: TheamColors.dark,
    borderRadius: 15,
    padding: 10,
  },
  cardCenter: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  subscription_headder: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 20
  },
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
  resultBody: {
    width: '90%',
    minWidth: '100%',
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
  },
  closeEria: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#0000003f',
  }


});
