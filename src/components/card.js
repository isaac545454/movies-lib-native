import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react' 
import api from '../services/api'
import {chave, imageApi} from '../data'
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation } from '@react-navigation/native'

export default function Card({filme}) {
    const Navigation = useNavigation()

    const navegaDetalhes = (id)=>{
        Navigation.navigate('Detalhes', { ident: id,  })
    }
  return (
    <View style={styles.card}>
        <Image source={{uri: imageApi+filme.poster_path}} style={styles.img}/>
        <Text style={styles.title}>{filme.title}</Text>
        <View style={{flexDirection: 'row', padding: 10}}>
        <AntDesign  name="star" size={24} color="#f7d354" />
        <Text style={styles.nota}>8.5</Text>
        </View>
        <TouchableOpacity style={styles.areaBtn} onPress={()=>navegaDetalhes(filme.id)}>
        <Text style={styles.textBtn}>Detalhes</Text>
        </TouchableOpacity>
     </View>             
  )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: "#111",
        width: 310,
        height: 500,
        padding: 40
    },
    img:{
        width: 250,
        height: 300,
    },
    title: {
        color: "#fff",
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 20,
    },
    nota:{
        color: "#fff",
        marginLeft: 10,
        fontSize: 15,
    },
    areaBtn: {
        backgroundColor: "#f7d354",
        width: "100%",
        padding: 10,
        alignItems: 'center',
    }
})