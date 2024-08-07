import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import Profile from './profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>izigo</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>Go to Profileee</Link>
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
