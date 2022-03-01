import React from "react";
import {Text, View } from "react-native";
import Greet from "./Greet";

export default function LoginForm() {
    return (
        <View>
            <Text>This is a React Native course</Text>
            <Greet />
            {/* <Greet user={'User2'}/> */}
            {/* <Greet user={'User3'}/> */}
        </View>
    )
}