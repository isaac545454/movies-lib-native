import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, {useLayoutEffect, useState, useEffect,  } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import {chave} from '../../data/'
import Card from '../../components/card'


export default function Index() {
    const route = useRoute()
    const navigation = useNavigation()
    const [filmes, setFilmes] = useState([]) 
    const [loading, setLoading] = useState(true)

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: route.params.data
        })
    })

    useEffect(()=>{
       buscar()
    }, [])

    const buscar = async ()=>{
           const data = route.params.data
           const res = await api.get(`search/movie/?${chave}&query=${data}`)
           console.log(res.data.results);
           setFilmes(res.data.results)
           setLoading(false)
    }
  return (
    <View style={styles.container}>
        {loading === true ? (<ActivityIndicator size={60} color="#f7d354" />):(
        <>    
        <FlatList
        data={filmes}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item=> item.id.toString()}
        renderItem={({item})=><Card filme={item} />}
       />
      </>)} 
     </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000",
    }
})