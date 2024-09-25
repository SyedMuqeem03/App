// import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = React.useState('');

  const handleButtonPress = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Basic App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Enter something:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Submit" onPress={handleButtonPress} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Information</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});
