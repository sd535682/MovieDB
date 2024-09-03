import {StyleSheet, View, Text, Pressable} from 'react-native';
import Colors from '../utils/Colors';

export default function Header({headerTitle, icon, location}) {
  return (
    <View style={styles.header}>
      <Text style={styles.header_Title}>{headerTitle}</Text>
      <Pressable onPress={location}>{icon}</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_Title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.red,
  },
});
