import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../utils/Colors';

export default function SearchBar({searchTerm, setSearchTerm}) {
  return (
    <View style={styles.search_bar}>
      <AntDesign
        name="search1"
        size={20}
        color={Colors.white}
        style={{paddingLeft: 10}}
      />
      <TextInput
        style={styles.input}
        placeholder="Search for a movie..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search_bar: {
    gap: 10,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'start',
    marginVertical: 15,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 20,
    color: Colors.white,
  },
});
