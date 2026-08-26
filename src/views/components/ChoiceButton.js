import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import HandIcon from './HandIcon';

export default function ChoiceButton({ type, selected, onPress, style }) {
  return (
    <Pressable onPress={() => onPress(type)} style={[styles.cell, style]}>
      {selected ? (
        <View style={styles.selectedBox}>
          <HandIcon type={type} />
        </View>
      ) : (
        <HandIcon type={type} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 110,
    height: 110,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedBox: {
    width: 64,
    height: 64,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#bbbbbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
