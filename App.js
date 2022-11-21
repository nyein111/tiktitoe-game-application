import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoardGame from './src/pages/BoardGame'

const App = () => {
  return (
    <View style={styles.container}>
      <BoardGame/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'
    }
})