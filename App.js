import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {app, auth,db,storage} from './src/config/utils/firebaseConnection'
import { Avatar,Icon ,Image} from '@rneui/base';
import './gesture-handler';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./src/kernel/components/Loading";
//Todos los componentes de react native empiezan en mayus, y las funciones en minus
import Login from './src/modules/auth/screens/Login';
import Navigation from './src/navigation/Navigation';
import NavigationLogger from './src/navigation/NavigationLogger';
export default function App() {
  const [login, setLogin] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect (() =>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
        console.log("Usuario logeado");
        
      } else {
        setLogin(false);
        console.log("Usuario no logeado");
      }
      setLoader(false);
    });

  }, [])

  if(loader){
    return(
      <Loading isVisible={true} size= {64} color='green' title='Espere un momento'/>
    );
  }else{
    if(login){
      return (
        <NavigationLogger/> /*Navigation logger */
      );
    }else{
      return (
        <Navigation/>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
