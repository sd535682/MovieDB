import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {useState, useEffect} from 'react';
import {fetchAllMovies} from '../services/api';
import MovieCard from '../components/Moviecard';
import {useNavigation} from '@react-navigation/native';
import Colors from '../utils/Colors';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import brandLogo from '../assets/netflix.png';
import {FlashList} from '@shopify/flash-list';

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

  const renderListItem = ({item}) => (
    <MovieCard movie={item.show} onPress={() => detailsNavigation(item.show)} />
  );

  return loading || error ? (
    <View style={styles.centered}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.red} />
      ) : (
        <Text>Error: {error}</Text>
      )}
    </View>
  ) : (
    <View style={styles.home_container}>
      <Header logo={brandLogo} icon={searchIcon} location={searchNavigation} />
      <FlashList
        data={movies}
        renderItem={renderListItem}
        estimatedItemSize={200}
        keyExtractor={item => item.show.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    minHeight: 2,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
  centered: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
