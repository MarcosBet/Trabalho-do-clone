import * as React from 'react';
import {View , Text, KeyboardAvoidingView , Image , TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from '../Style/styles';
import { Entypo } from '@expo/vector-icons';
import Home from './home';


export default function Login(){
    const msg=()=> Alert.alert('MSG','Bem Vindo ao instagram')
    return (

        <KeyboardAvoidingView  style={styles.bacgroungLogin}>

            <View style={styles.containerLogo}>
                <View>
                   
                 <TouchableOpacity
                 onPress={<Home/>}
                 >
                  <Entypo name="instagram" size={40} color="black" />
                 </TouchableOpacity>
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
                    secureTextEntry
                    onChange={()=>{uri:"h"}}
                />

                <TouchableOpacity style={styles.btnLogin}>
                    
                    <Text style={styles.btnLoginText}>Acessar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>

    );
}





