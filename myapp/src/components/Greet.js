import React from "react";
import { Text } from "react-native";

export default function Greet( {user = "UserX"}) {
    return(
        <Text>Hello {user}</Text>
    )
}