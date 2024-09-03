import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';
import Colors from '../utils/Colors';
import {hp, wp} from '../utils/Reponsive';
import CustomText from '../components/DetailsText';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function DetailsScreen({route}) {
  const {movie} = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.black,
      }}>
      <ScrollView
        contentContainerStyle={styles.details_container}
        scrollEnabled>
        <Image
          source={{uri: movie.image?.original}}
          style={styles.image}
          resizeMode="cover"
        />
        <CustomText size={24}>{movie.name}</CustomText>
        <CustomText color="grey">
          {movie.summary.replace(/<[^>]+>/g, '')}
        </CustomText>
        <CustomText>Genre: {movie.genres?.join(', ')}</CustomText>
        <CustomText>Release Date: {movie.premiered}</CustomText>
        <CustomText>Language: {movie.language}</CustomText>
        <CustomText>Rating: {movie.rating.average}</CustomText>
        <CustomText>Runtime: {movie.averageRuntime} minutes</CustomText>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  details_container: {
    gap: 10,
    paddingVertical: wp(5),
    paddingHorizontal: wp(6),
    backgroundColor: Colors.black,
    flexDirection: 'column',
  },
  image: {
    width: wp(85),
    height: hp(40),
    borderRadius: 20,
  },
});
