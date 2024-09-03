import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Button} from 'react-native';
import SearchBar from '../components/Searchbar';
import MovieCard from '../components/Moviecard';
import {searchMovies} from '../services/api';

export default function SearchScreen({navigation}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setLoading(true);
    searchMovies(searchTerm) // Fetch movies using the API function
      .then(data => {
        setMovies(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setMovies([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Button title="Search" onPress={handleSearch} />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard
            movie={item.show}
            onPress={() => navigation.navigate('Details', {movie: item.show})}
          />
        )}
        keyExtractor={item => item.show.id.toString()}
      />
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
