import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {hp, wp} from '../utils/Reponsive';

export default function MovieCard({movie, onPress}) {
  const cleanSummary = movie?.summary.replace(/<[^>]+>/g, '');

  return (
    movie.image.original && (
      <Pressable onPress={onPress} style={styles.card}>
        <Image
          source={{uri: movie.image?.original}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie?.name}</Text>
          <Text style={styles.summary} numberOfLines={3} ellipsizeMode="tail">
            {cleanSummary}
          </Text>
        </View>
      </Pressable>
    )
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    width: wp(100) - wp(10),
    height: hp(20),
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  summary: {
    fontSize: 14,
    paddingTop: 5,
    color: '#666',
  },
});
