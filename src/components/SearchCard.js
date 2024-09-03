import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {hp, wp} from '../utils/Reponsive';
import CustomText from './DetailsText';

export default function SearchCard({movie, onPress}) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image
        source={{uri: movie.image?.medium}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <CustomText color={Colors.white}>{movie?.name}</CustomText>
        <CustomText color={Colors.white}>
          Rating : {movie.rating?.average}
        </CustomText>
        <CustomText color={Colors.white}>
          Language : {movie.language}
        </CustomText>
        <CustomText color={Colors.white} size={12}>
          Genre : {movie.genres?.join(', ')}
        </CustomText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.red,
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    width: wp(20),
    height: hp(15),
  },
});
