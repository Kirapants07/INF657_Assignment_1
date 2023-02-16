import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './components/TodoApp';
import TodoList from './components/TodoList';

export default function App() {
  const name = "name goes here";

  return (
    <View style={styles.container}>
      <Text>
        <TodoApp />
        {/* <TodoList /> */}
      </Text>
      {/* <StatusBar style="auto" /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
