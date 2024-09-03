import {Text, View, StyleSheet} from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.seacrh_container}>
      <Text style={{color: 'black'}}>SearchScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  seacrh_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
