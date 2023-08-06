import React from "react";
import { Text, TextInput } from "react-native";

export const MyTextInput = (props) => {
  const style = {
    fontFamily: "Inter-Black",
    borderWidth: 1,
    padding: 2,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 20,
    ...props.style,
  };
  return <TextInput placeholder={props.placeholder} style={style}>{props.children}</TextInput>; 
};