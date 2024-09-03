import {StyleSheet, View, Text, Pressable, Image} from 'react-native';

export default function Header({logo, icon, location}) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
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
  logo: {height: 25, width: 25, resizeMode: 'contain'},
});
