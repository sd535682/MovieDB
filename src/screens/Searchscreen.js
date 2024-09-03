import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import SearchBar from '../components/Searchbar';
import {searchMovies} from '../services/api';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchCard from '../components/SearchCard';
import Colors from '../utils/Colors';
import {FlashList} from '@shopify/flash-list';

export default function SearchScreen({navigation}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = debounce(term => {
    if (term.trim() === '') {
      setMovies([]);
      return;
    }
    setLoading(true);
    searchMovies(term)
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
  }, 500);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const renderSearchList = ({item}) => (
    <SearchCard
      movie={item.show}
      onPress={() => navigation.navigate('Details', {movie: item.show})}
    />
  );

  return (
    <SafeAreaView style={styles.search_screen}>
      <View style={styles.container}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {loading && <ActivityIndicator size="large" color={Colors.red} />}
        {error && <Text>Error: {error}</Text>}
        {/* Only show FlatList if there is a search term and movies */}
        {searchTerm.trim() !== '' && movies.length > 0 && (
          <FlashList
            data={movies}
            renderItem={renderSearchList}
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.show.id.toString()}
          />
        )}
        {/* Show a message when there are no results and the search term is not empty */}
        {searchTerm.trim() !== '' &&
          movies.length === 0 &&
          !loading &&
          !error && <Text style={styles.noResultsText}>No results found.</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  search_screen: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  noResultsText: {
    color: Colors.white,
    textAlign: 'center',
    marginTop: 20,
  },
});
