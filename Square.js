import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';

export const Square = ({squareState, onPress, pos}) => {

    const [player, setPlayer] = useState("")

    const [textSize] = useState(new Animated.Value(0))

    const startAnimationLike = () => {
        Animated.spring(textSize, {
            toValue: 1,
            bounciness: 15,
            useNativeDriver: true
        }).start()
    }

    const startAnimationUnlike = () => {
        Animated.timing(textSize, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
        }).start()
    }

    useEffect(
        () => {
            if(typeof squareState.board[pos] == 'string') {
                setPlayer(squareState.board[pos])
                startAnimationLike()
            } else {
                setPlayer("")
                startAnimationUnlike()
            }
        }
    )

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => {
            onPress()
        }}>
            <View style={{ height: 120, width: 120, backgroundColor: '#373737', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Animated.View style={{transform: [{scale: textSize.interpolate(
                        {
                            inputRange: [0, 0.5, 1],
                            outputRange: [1, 1.5, 1]
                        }
                    )}]}}>
                        <Animated.Text style={{color: '#fff', fontSize: 20}}>{player}</Animated.Text>
                    </Animated.View>
            </View>
        </TouchableOpacity>
    )
}