import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './components/TodoApp';

export default function App() {
  const name = "name goes here";

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text>
          <TodoApp />
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4cdee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
  },
});
