import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import {fetchAllMovies} from '../services/api';
import MovieCard from '../components/Moviecard';
import {useNavigation} from '@react-navigation/native';
import Colors from '../styles/Colors';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchIcon = (
    <AntDesign name="search1" size={20} color={Colors.white} />
  );

  function searchNavigation() {
    navigation.navigate('Search');
  }

  function detailsNavigation(movie) {
    navigation.navigate('Details', {movie});
  }

  useEffect(() => {
    const loadMovies = () => {
      fetchAllMovies()
        .then(data => {
          setMovies(data);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    loadMovies();
  }, []);

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );

  return (
    <View style={styles.home_container}>
      <Header headerTitle="N" icon={searchIcon} location={searchNavigation} />
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard
            movie={item.show}
            onPress={() => detailsNavigation(item.show)}
          />
        )}
        keyExtractor={item => item.show.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
});
