import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../modules/auth/screens/Login";
import CreateAccount from "../modules/auth/screens/CreateAccount";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{title:'Inicio de sesion'}} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} options={{title:'Crear cuenta'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
