import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Minimax from 'tic-tac-toe-minimax'
import Modal from 'react-native-modal';
import { Square } from './Square'
import {useFonts} from 'expo-font'
import Ionicons from 'react-native-vector-icons/Ionicons';

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

  const [isModalVisible, setIsModalVisible] = useState(false)

  const [isDraw, setIsDraw] = useState(true)
  
  //const nextMove = ComputerMove( board, symbols, difficulty );

  //handlers
  const clickHandler = squareNum => {  
    if (typeof board.board[squareNum] == 'string') {
      return;
    }
    let newBoard = board.board
    newBoard[squareNum] = huPlayer
    setBoard({
      board: newBoard,
      winner: null
    })

    newBoard = board.board
    setBoard(GameStep( newBoard, symbols, difficulty ))
    
  }

  //console.log(board.winner)
  /*switch (board.winner) {
    case "aiPlayer":
      conso
      () => setIsModalVisible(true)
      break;
    case "huPlayer":
      () => setIsModalVisible(true)
      break;
    case "draw": 
      () => setIsModalVisible(true)
      break;
    default:
      break;
  }*/

  useEffect(
    () => {
      if(board.winner == "aiPlayer") {
        setIsDraw(false)
        setIsModalVisible(true)
      } else if (board.winner == "draw") {
        setIsDraw(true)
        setIsModalVisible(true)
      }
    }, [board]
  )

  const [loaded] = useFonts({
    InconsolataM: require('./Inconsolata-Medium.ttf')
  });

  if(!loaded) {
      return null;
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

      <Modal isVisible={isModalVisible} onBackdropPress={() => {
          setBoard({
            winner: null,
            board: [0,1,2,3,4,5,6,7,8]
          })
          setIsModalVisible(false)
        }}>
        <View style={{ width: '80%', backgroundColor: '#222222', alignSelf: 'center', borderRadius: 14, padding: '10%'}}>
          <Text style={{color: '#fff', alignSelf: 'center', fontSize: 25, fontFamily: 'InconsolataM'}}>{isDraw ? "Tie game!" : "You lost!"}</Text>
          <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20, marginTop: '4%', fontFamily: 'InconsolataM'}}>{isDraw ? "So close!" : "Better luck next time!"}</Text>
          <TouchableOpacity activeOpacity={0.9} style={{ width: '80%', justifyContent: 'center', height: 45, backgroundColor: '#F1F1F1', alignSelf: 'center', marginTop: '30%', marginBottom: '20%'}} onPress={() => {
          setBoard({
            winner: null,
            board: [0,1,2,3,4,5,6,7,8]
          })
          setIsModalVisible(false)
        }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Ionicons name="arrow-redo" size={18}></Ionicons>
              <Text style={{fontFamily: 'InconsolataM', fontSize: 18, marginLeft: '5%'}}>Rematch?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      
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
