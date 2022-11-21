import { StyleSheet, Text, View, } from 'react-native'
import React, { useState, useEffect } from 'react'
import Action from '../components/Action'
import Result from '../components/Result'
import Board from '../components/Board'

const BoardGame = () => {
    const [board, setBoard] = useState(Array(9).fill(''))
    const [player, setplayer] = useState(false)
    const [winner, setWinner] = useState('')

    const WINNER_STATE = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]

    useEffect(() => {
        winner &&
            setTimeout(() => {
                setBoard(Array(9).fill(''))
                setWinner('')
            }, 9000)
    }, [winner])


    const winnerCheck = (arr) => {
        WINNER_STATE.reduce((prev, [a, b, c]) => {
            if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
                prev = arr[b];
                setWinner(prev)
            }
            return prev
        }, '')
    }



    const clickBoardItem = (id, data) => {

        let checker = null;

        if (data === 1) {
            if (id === 0) {
                checker = 0
            } else if (id === 1) {
                checker = 1
            }
            else if (id === 2) {
                checker = 2
            }
        }
        else if (data === 2) {
            if (id === 0) {
                checker = 3
            }
            else if (id === 1) {
                checker = 4
            }
            else if (id === 2) {
                checker = 5
            }
        }
        else if (data === 3) {
            if (id === 0) {
                checker = 6
            }
            else if (id === 1) {
                checker = 7
            }
            else if (id === 2) {
                checker = 8
            }
        }
        else {
            checker = null
        }

        const newBoard = board.map((index, idx) => idx === checker ? (player === false ? '0' : 'x') : index)
        setBoard(newBoard)
        setplayer(!player)
        winnerCheck(newBoard)
    }

    const resetButton = () => {
        setBoard(Array(9).fill(''))
        setplayer(false)
        setWinner('')
    }
    console.log(winner)

    return (
        <View style={styles.container}>
            <Result style={styles.result} />
            <Board style={styles.board} board={board} clickBoardItem={clickBoardItem} resetButton={resetButton}
                winner={winner} />
            <Action style={styles.action} />
        </View>
    )
}

export default BoardGame

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: 'red'

    },
    result: {
        flex: 1,
        backgroundColor: 'orange'
    },
    board: {
        flex: 3.5,
        backgroundColor: 'yellow',
        textAlignVertical: 'center',
        justifyContent: 'center'

    },
    action: {
        flex: 1,
        backgroundColor: 'orange'
    }
})