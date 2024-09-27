import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const events = [
  { id: '1', title: 'Lecture on Artificial Intelligence', date: '2024-09-30' },
  { id: '2', title: 'Seminar on Personal Development', date: '2024-10-02' },
  { id: '3', title: 'Mobile App Programming Workshop', date: '2024-10-05' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Events</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.event}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjusts the layout to start from top
    paddingVertical: 50,
    paddingHorizontal: 20, // Added horizontal padding for spacing
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  event: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adds a subtle shadow for Android
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  eventDate: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
