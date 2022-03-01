import React from "react";
import { Text } from "react-native";

export default function Greet( {user}) {
    return(
        <Text>Hello {user}</Text>
    )
}