import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { ChangeName } from './accountChanges/changeName';
import { ProfilePicture } from './accountChanges/profilePicture';
import { ChangeEmail } from './accountChanges/changeEmail';
import { ChangePassword } from './accountChanges/changePassword';
import { ChangeAPISECRECT } from './accountChanges/changeAPI';
import { TermsAndConditions } from './accountChanges/terms&Conditions';
import { AffliateNewtork } from './accountChanges/affliate';
import { Acess } from './accountChanges/acess';

export function EditableSheet({ onChangeSheet, bottomSheetRef, ui, downClose, snapPoints }: { onChangeSheet?: (index: number) => void, bottomSheetRef?: any, ui?: string, downClose?: boolean, snapPoints?: any }) {

    function a() {
        console.log(downClose)
    }
    useEffect(() => {
        a
    }, [])
    return (
        <>
            <BottomSheet
                enablePanDownToClose={downClose === true ? downClose : false}
                ref={bottomSheetRef}
                onChange={onChangeSheet}
                snapPoints={snapPoints ? snapPoints : ["80%", "80%"]}
            >
                <BottomSheetView style={styles.contentContainer}>
                    {ui === "PIC" ? (<>
                        <ProfilePicture bottomSheetRef={bottomSheetRef} />
                    </>) : ui === "NAME" ? (<>
                        <ChangeName bottomSheetRef={bottomSheetRef} />
                    </>) : ui === "EMAIL" ? (<>
                        <ChangeEmail bottomSheetRef={bottomSheetRef} />
                    </>) : ui === "PAW" ? (<>
                        <ChangePassword bottomSheetRef={bottomSheetRef} />
                    </>) : ui === "TERMS" ? (<>
                        <TermsAndConditions />
                    </>) : ui === "AFFLIATE" ? (<>
                        <AffliateNewtork />
                    </>) : ui === "API" ? (<>
                        <ChangeAPISECRECT bottomSheetRef={bottomSheetRef} />
                    </>) : ui === "ACESS" && (<>
                        <Acess bottomSheetRef={bottomSheetRef} />
                    </>)}
                </BottomSheetView>
            </BottomSheet>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});