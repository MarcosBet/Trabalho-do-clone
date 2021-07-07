import * as React from 'react';
import {View ,useState, Text, KeyboardAvoidingView , Image , TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from '../Style/styles';
import { Entypo ,AntDesign} from '@expo/vector-icons';
import Home from './home';
//import { WebView } from 'react-native-webview';
import Fundo from '../../../assets/fundo.png';


export default function Login({ navigation}){
    const Acessar=() =>{
        navigation.navigate('Home');
       
        }
        //const [url , setUrl]= useState('https://github.com/MarcosBet/Trabalho-do-clone')

    return (

        <KeyboardAvoidingView  style={styles.bacgroungLogin}>

           
            <View style={styles.containerLogo
            
            }>
                <View>
                   
                 <TouchableOpacity>
                  <Entypo name="instagram" size={60} color="black" />
                 </TouchableOpacity>
                </View>
               
                   <View>
                   <TouchableOpacity 
                   //onPress={{uri: url}}
                   >
                   <AntDesign name="github" size={50} color="black" />
                   </TouchableOpacity>
                    {/* <WebView                     
                    source={{uri:url}}
                    style={{marginTop:20}}
                    />*/}
                   </View> 
                  
            </View>

            <View style={styles.containeLogin}>
                <TextInput
                style={styles.inputLogo}
                    placeholder="Usuario "
                    autoCorrect={false}
                    onChange={()=>{}}
                />

            </View>
            <View>
                <TextInput
                 style={styles.inputLogo}
                    placeholder="Senha "
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChange={()=>{}}
                />

                <TouchableOpacity 
                style={styles.btnLogin}
                onPress={(Acessar)}
                
                >
                    
                    <Text style={styles.btnLoginText}>Acessar</Text>
                </TouchableOpacity>
            </View>
           
        </KeyboardAvoidingView>

    );
}





