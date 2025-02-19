import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image, Input, Button } from "@rneui/base";
import { isEmpty } from "lodash";
import { Icon } from "@rneui/base";
import { Card } from "@rneui/themed";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(true);

    const handleLogin = () => {
        if (isEmpty(email) || isEmpty(password)) {
            setError({
                email: "El correo electrónico es requerido",
                password: "La contraseña es requerida",
            });
        } else {
            setError({ email: "", password: "" });
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    console.log("Inicio de sesión exitoso");
                })
                .catch((error) => {
                    console.error("Error:", error.message);
                });
        }
    };

    return (
        <View style={styles.screen}>  
            <Card containerStyle={styles.card}>
                <View style={styles.container}>
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/925/925717.png",
                        }}
                        style={styles.image}
                    />
                    <View style={styles.formContainer}>
                        <Input
                            placeholder="Correo electrónico"
                            label="Correo electrónico"
                            keyboardType="email-address"
                            onChangeText={setEmail}
                            errorMessage={error.email}
                            containerStyle={styles.input}
                            inputContainerStyle={{ width: "100%" }}
                        />
                        <Input
                            placeholder="Contraseña"
                            label="Contraseña"
                            secureTextEntry={showPassword}
                            onChangeText={setPassword}
                            errorMessage={error.password}
                            containerStyle={styles.input}
                            inputContainerStyle={{ width: "100%" }}
                            rightIcon={
                                <Icon
                                    onPress={() => setShowPassword(!showPassword)}
                                    type="material-community"
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                />
                            }
                        />
                        <Button title="Iniciar sesión" onPress={handleLogin} buttonStyle={styles.button} />
                        <Button
                            type="clear"
                            title="Crear cuenta"
                            onPress={() => navigation.navigate("CreateAccount")}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20,
    },
    card: {
        width: "90%",
        maxWidth: 400,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
    },
    container: {
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 15,
    },
    formContainer: {
        width: "100%",
    },
    input: {
        width: "100%",
    },
    button: {
        backgroundColor: "#4abfa4",
        borderRadius: 10,
        marginVertical: 10,
        width: "100%", 
    },
});
