import React from 'react';
import {  View,
    FlatList,      
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
     } from 'react-native';
import styles from '../Style/styles';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Post from './post';




export default Home =()=>{

    const post = [
        {
            id:'1',
            author: 'marcos.bet',
            pincture_url:'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/03/5527433-1200x675.jpg',
            likes:'00001',
            description:' Tentando sem desistir ',
            hashtags: '#Help ',
            place:'Aula de Ract Native '   
        },
        {
            id:'2',
            author: 'Fernanda.Thees',
            pincture_url:'https://http2.mlstatic.com/quadro-deusa-dama-da-justica-balanca-direito-advogados-show-D_NQ_NP_450421-MLB20769128809_062016-F.jpg',
            likes:'1000',
            description:' Trabalhando ate vencer ',
            hashtags: '#Suor  ',
            place:'Direito uma Batalha'   
        },
        {
            id:'3',
            author: 'Lola.bet',
            pincture_url:'https://2.bp.blogspot.com/-3TFNt2X_HxM/V0DjAxymUMI/AAAAAAAAJnw/R6fs7naJLzAyh2rpQoJCm6eaLQo9pSuGgCLcB/s1600/gato-mascarado-preto-e-branco-black-white-cat.jpg',
            likes:'771',
            description:'Gata louca ',
            hashtags: '#Dormir muito ',
            place:'Cama '   
        },
        {
            id:'4',
            author: 'Aurora.bet',
            pincture_url:'https://th.bing.com/th/id/R.96277caa1125a6360981bd0c799a93b8?rik=XJlP0AHEK5OgdA&pid=ImgRaw',
            likes:'555',
            description:' Cachora devoradora ',
            hashtags: '#Destruir_tudo',
            place:'Casa  '   
        },
        
    
        
    ];

              
                    function renderItem({item: post}){
                return (


                    <View>

                        
                   

                     
                    <ScrollView>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <View >
                            <Text style={styles.author}>{post.author}</Text>
                            <Text style={styles.place}>{post.place}</Text>
                            </View>

                            <View >
                                <TouchableOpacity>
                                <SimpleLineIcons name="options-vertical" size={24} color="black" />
                                </TouchableOpacity>
                    
                            </View>

                        </View>


                        <View>
                            <Image style={styles.pincture_url} 
                            source={{uri:post.pincture_url}} 
                            />
                        </View>

                        <View style={styles.footer}>

                            <View style={styles.actions}>

                                <View style={styles.leftActions}>
                                    <TouchableOpacity style={styles.action} >
                                    <AntDesign name="like2" size={24} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.action}>
                                    <FontAwesome5 name="comment" size={24} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.action}>
                                    <FontAwesome name="send-o" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>


                                <View>
                                    <TouchableOpacity >
                                    <Fontisto name="save" size={24} color="black" />
                                    
                                    </TouchableOpacity>
                                </View>
                            </View>

                                <View>
                                <Text style={styles.like}>{post.likes}  Likes</Text> 
                                <Text style={styles.description}>{post.description}comentarios</Text>
                                <Text style={styles.hashtags}>{post.hashtags}</Text>
                                </View>
                        </View>

                    </View>        
                    </ScrollView>  
                   </View>
                );
            }
           
           
   //********************************************************************************************************** */        
           
    return(

                <View>
                    <FlatList  
                    
                        data={post}
                        keyExtractor={(item)=>item.id}
                        renderItem={renderItem}
                    
                    />
        
        
                    
                </View>
        
            );
    


        
    

}


