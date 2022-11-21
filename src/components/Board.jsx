import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Board = (props) => {
    const { style, board, clickBoardItem, resetButton, winner } = props

    return (
        <View style={style}>
            {winner && <Text style={winner === '0' ? styles.winnerText_1 : styles.winnerText_2}>
                The Winner is {winner}
            </Text>}
            <View style={styles.container}>
                {board.slice(0, 3).map((index, idx) =>
                    <TouchableOpacity style={index === '' ? styles.button : index === '0' ?
                        styles.button_1 : styles.button_2} key={idx}
                        onPress={() => index === '' && !winner && clickBoardItem(idx, 1)}>
                        <Text style={styles.text}>{index}</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.container}>
                {board.slice(3, 6).map((index, idx) =>
                    <TouchableOpacity style={index === '' ? styles.button : index === '0' ?
                        styles.button_1 : styles.button_2} key={idx}
                        onPress={() => index === '' && !winner && clickBoardItem(idx, 2)}>
                        <Text style={styles.text}>{index}</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.container} >
                {board.slice(6, 9).map((index, idx) =>
                    <TouchableOpacity style={index === '' ? styles.button : index === '0' ?
                        styles.button_1 : styles.button_2} key={idx}
                        onPress={() => index === '' && !winner && clickBoardItem(idx, 3)}>
                        <Text style={styles.text}>{index}</Text>
                    </TouchableOpacity>
                )}

            </View>

            {/* <View style={styles.fleshButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Hello</Text>
                </TouchableOpacity>
            </View> */}
            <View style={styles.container} >
                <TouchableOpacity style={styles.reset} onPress={resetButton}><Text>Reset</Text></TouchableOpacity>

            </View>

        </View>
    )
}

export default Board

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        padding: 1,

    },

    fleshButton: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 50

    },

    button: {
        width: 90,
        height: 90,
        backgroundColor: 'gray',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 3,
        elevation: 40,
        margin: 4,
        shadowOpacity: 20,
    },

    button_1: {
        width: 90,
        height: 90,
        backgroundColor: 'aqua',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 3,
        elevation: 40,
        margin: 4,
        shadowOpacity: 20,

    },

    button_2: {
        width: 90,
        height: 90,
        backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 3,
        elevation: 40,
        margin: 4,
        shadowOpacity: 20,

    },

    text: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 50
    },

    winnerText_1: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'aqua',
        fontSize: 50
    },

    winnerText_2: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'red',
        fontSize: 50
    },

    reset: {
        width: 60,
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
        padding: 9,
        borderRadius: 10,


    }


})