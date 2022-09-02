import {useState, useEffect, } from 'react'
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator  } from 'react-native';
import api from '../../services/api'
import {chave, imageApi} from '../../data'
import Card from '../../components/card'
import Navbar from '../../components/navbar'

export default function Home(){
const [filmes, setFilmes] = useState([])
const [loading, setLoading] = useState(true)

useEffect(()=>{
  topFilmes()
},[])

const topFilmes = async ()=>{
 const data = await api.get(`movie/top_rated?${chave}`)
   setFilmes(data.data.results)
   setLoading(false)
   console.log(data.data.results);
}


return(
        <View style={styles.container}>
        {loading === true ? (<ActivityIndicator size={60} color="#f7d354" />):(
        <>    
        <Navbar />
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
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    },
 
   
})