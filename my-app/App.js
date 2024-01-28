import { StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen}
    colors={['#ff9', '#ffffff']} >
    <StartGameScreen/>
  </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  }
});
