import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function CustomText({
  children,
  color = 'white',
  size = 16,
  marginVertical = 5,
}) {
  return (
    <Text style={{color, fontSize: size, marginVertical}}>{children}</Text>
  );
}
