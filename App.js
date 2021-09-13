import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Minimax from 'tic-tac-toe-minimax'
import { Square } from './Square'

export default function App() {

  //importing the ComputerMove and GameStep
  const { ComputerMove } = Minimax;
  const { GameStep } = Minimax;

  //constants
  const huPlayer = "X";
  const aiPlayer = "O";
  const symbols = {
      huPlayer: huPlayer,
      aiPlayer: aiPlayer
  }
  const difficulty = "Hard";

  const [board, setBoard] = useState({
    winner: null,
    board: [0,1,2,3,4,5,6,7,8]
  })
  
  //const nextMove = ComputerMove( board, symbols, difficulty );

  //handlers
  const clickHandler = squareNum => {    
    let newBoard = board.board
    newBoard[squareNum] = huPlayer
    const humanStep = GameStep( newBoard, symbols, difficulty );
    setBoard(humanStep)

    //const nextMove = ComputerMove( board.board, symbols, difficulty );
    newBoard = board.board
    //newBoard[nextMove] = aiPlayer
    const aiStep = GameStep( newBoard, symbols, difficulty );
    setBoard(aiStep)

    console.log(board)
  }

  return (
    <View style={styles.container}>
      
      <View style={{flexDirection: 'row'}}>
        
        <View>
          <Square onPress={() => clickHandler(0)} squareState={board} pos={0}></Square>
        </View>

        <View style={{marginHorizontal: '2%'}}>
          <Square onPress={() => clickHandler(1)} squareState={board} pos={1}></Square>
        </View>

        <View>
          <Square onPress={() => clickHandler(2)} squareState={board} pos={2}></Square>
        </View>

      </View>

      <View style={{flexDirection: 'row', marginVertical: '2%'}}>
        
        <View>
          <Square onPress={() => clickHandler(3)} squareState={board} pos={3}></Square>
        </View>

        <View style={{marginHorizontal: '2%'}}>
          <Square onPress={() => clickHandler(4)} squareState={board} pos={4}></Square>
        </View>

        <View>
          <Square onPress={() => clickHandler(5)} squareState={board} pos={5}></Square>
        </View>

      </View>

      <View style={{flexDirection: 'row'}}>
        
        <View>
          <Square onPress={() => clickHandler(6)} squareState={board} pos={6}></Square>
        </View>

        <View style={{marginHorizontal: '2%'}}>
          <Square onPress={() => clickHandler(7)} squareState={board} pos={7}></Square>
        </View>

        <View>
          <Square onPress={() => clickHandler(8)} squareState={board} pos={8}></Square>
        </View>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
