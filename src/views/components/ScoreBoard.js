import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreBoard({ playerScore, computerScore }) {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.label}>Jugador</Text>
        <Text testID="score-player" style={styles.score}>{playerScore}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Computadora</Text>
        <Text testID="score-computer" style={styles.score}>{computerScore}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  column: {
    alignItems: 'center',
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 6,
    minWidth: 90,
  },
  label: {
    color: '#9e9e9e',
    fontSize: 14,
  },
  score: {
    color: '#bdbdbd',
    fontSize: 22,
    marginTop: 4,
  },
});
