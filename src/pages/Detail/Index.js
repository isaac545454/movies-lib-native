import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image  } from 'react-native'
import React,{useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { chave, imageApi } from '../../data'
import api from '../../services/api'
import Card from '../../components/card'

export default function Index() {
    const route = useRoute()
    const [filme, setFilme] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      DetalhesFilme()
    }, [])
    const DetalhesFilme =async()=>{
      const id = route.params.ident
      const res = await api.get(`movie/${id}?${chave}`)
      console.log(res);
      setFilme(res.data)
      setLoading(false)
    }



  return (
    <View style={styles.containerDetalhes}>
    {loading === true?(<ActivityIndicator size={60} color="#f7d354" />):(
      <ScrollView>
      <View style={styles.containerDetalhes}>
         <Image source={{uri: imageApi+filme.poster_path}} style={styles.img}/>
        <Text style={styles.title}>{filme.title}</Text>
        <Text style={styles.textDetalhes}> {filme.tagline}</Text>

        <View style={styles.detalhes}>

         <Text style={styles.textDetalhes}><AntDesign name="creditcard" size={24} color="#f7d354" /> orçamento:</Text>
        <Text style={styles.textDetalhes}>
            {filme.budget}
           </Text>
        <Text style={styles.textDetalhes}>
          <FontAwesome5 name="file-invoice-dollar" size={24} color="#f7d354" /> receita: </Text>
          <Text style={styles.textDetalhes}>{filme.revenue}</Text>

         <Text style={styles.textDetalhes}><Entypo name="back-in-time" size={24} color="#f7d354" />duração</Text> 
        <Text style={styles.textDetalhes}>{filme.runtime}</Text>

        <Text style={[styles.textDetalhes, styles.tela]}><MaterialIcons name="description" size={24} color="#f7d354" /></Text>
        <Text style={[styles.textDetalhes, styles.tela]}>{filme.overview}</Text>
        </View>
      </View>
      </ScrollView>
    )}
    </View>
  )
}

const styles = StyleSheet.create({
    containerDetalhes: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        
    },
    img: {
      height: 400, 
      width: 250,
      marginTop: 20
    },
    title: {
      color: "#fff",
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
    },
    detalhes: {
      marginTop: 20,
      marginStart: 20
    },
    textDetalhes: {
      color: "#fff",
      marginTop: 12,
      marginStart: 20,
      marginEnd: 20,
      fontSize: 18,
    },
    tela: {
      paddingBottom: 40
    }

})