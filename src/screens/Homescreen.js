import {Text, View, StyleSheet} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.home_container}>
      <Text style={{color: 'black'}}>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
