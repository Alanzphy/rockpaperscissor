import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultBadge({ text }) {
  return (
    <View style={styles.badge}>
      <Text testID="result-text" style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#e0e0e0',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  text: {
    color: '#616161',
    fontSize: 14,
    fontWeight: '600',
  },
});
