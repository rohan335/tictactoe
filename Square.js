import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Square = ({squareState, onPress, pos}) => {

    const [player, setPlayer] = useState("")

    useEffect(
        () => {
            if(typeof squareState.board[pos] == 'string') {
                setPlayer(squareState.board[pos])
            }
        }
    )

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => {
            onPress()
        }}>
            <View style={{ height: 120, width: 120, backgroundColor: '#373737', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#fff', fontSize: 20}}>{player}</Text>
            </View>
        </TouchableOpacity>
    )
}