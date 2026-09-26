import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CHOICES } from '../models/vo/Choice';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import ChoiceButton from './components/ChoiceButton';
import ResultBadge from './components/ResultBadge';

export default function GameView({
  playerScore,
  computerScore,
  selectedChoice,
  resultText,
  onSelect,
}) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />

      <Text style={styles.title}>Piedra, Papel, Tijeras</Text>

      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />

      <View style={styles.board}>
        <ChoiceButton
          type={CHOICES.PAPEL}
          selected={selectedChoice === CHOICES.PAPEL}
          onPress={onSelect}
        />
        <View style={styles.bottomRow}>
          <ChoiceButton
            type={CHOICES.PIEDRA}
            selected={selectedChoice === CHOICES.PIEDRA}
            onPress={onSelect}
            style={styles.rightGap}
          />
          <ChoiceButton
            type={CHOICES.TIJERAS}
            selected={selectedChoice === CHOICES.TIJERAS}
            onPress={onSelect}
          />
        </View>
      </View>

      <View style={styles.resultContainer}>
        <ResultBadge text={resultText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 24,
  },
  board: {
    alignItems: 'center',
    marginTop: 32,
  },
  bottomRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  rightGap: {
    marginRight: 4,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 48,
  },
});
