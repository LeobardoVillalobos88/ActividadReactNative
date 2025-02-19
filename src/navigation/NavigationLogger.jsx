import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import {Icon} from "@rneui/base";
import Profile from "../modules/componets/Profile"
const Stack = createStackNavigator();
export default function NavigationLogger(){

    return(
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="Profile" component={Profile} options={{title:'Productos'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
