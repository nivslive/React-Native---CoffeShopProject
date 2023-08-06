import React from "react";
import { Text } from "react-native";

export const MyText = (props) => {
  const style = {
    fontFamily: "Inter-Black",
    ...props.style,
  };
  return <Text style={style}>{props.children}</Text>; 
};