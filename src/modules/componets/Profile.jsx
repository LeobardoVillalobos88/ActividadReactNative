import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Icon, Avatar, Button} from "@rneui/base"

import { getAuth } from "firebase/auth";

export default function Profile() {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
  return (
    <View style={styles.container}>
        
        <Button
            title={"Cerrar sesion"}
            containerStyle={styles.btnLogoutContainer}
            buttonStyle={styles.btnLogout}
            titleStyle={{color: "#4abfa4"}}
            onPress={() => {
                auth.signOut();
            }}      
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginTop: 64
    },
    btnLogoutContainer: {
        marginTop: 16,
    },
    btnLogout: {
        backgroundColor: "withe",
        borderBlockColor: '#4abfa4',
        borderWidth: 1,
    }
})