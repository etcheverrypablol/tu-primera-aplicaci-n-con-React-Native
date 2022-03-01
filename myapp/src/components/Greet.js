import React from "react";
import { Text } from "react-native";
import PropTypes from 'prop-types';

export default function Greet( props) {

    const {firstName, lastName} = props;
    return(
        <Text>Hello {firstName} {lastName}</Text>
    )
}

Greet.defaultProps = {
    firstName: "FirstName",
    lastName: "LastName"
}

Greet.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}