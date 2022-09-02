import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'

export default function navbar() {
  const [input, setInput] = useState('')
  const Navigation = useNavigation()

  const naviSearch = (params)=> {
  if(!input) return


    Navigation.navigate("Search", { data: params })
    setInput("")
  }

  return (
    <View style={styles.navbar}>
      
      <TextInput style={styles.input}
      placeholder="procurar filme"
      onChangeText={(texto)=> setInput(texto)}
      value={input}
      />
      <TouchableOpacity onPress={()=>naviSearch(input)}>
     <AntDesign name="search1" style={styles.icon} size={34} color="#000" />
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    navbar:{
        flexDirection: "row",
        paddingTop: 30,
        width: "100%",
        height: 100,
        backgroundColor: "#111",
        alignItems: 'center',
        justifyContent: 'center' 
    },
    input: {
        backgroundColor: "#fff",
        width: 220,
        padding: 10,
        borderRadius: 10,
        height: 50
    }, 
    icon: {
        marginLeft: 20,
        backgroundColor: "#f7d354",
        padding: 10,
        borderRadius: 7,
        height: 50
    }
})

