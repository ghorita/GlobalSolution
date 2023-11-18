import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './style';
import axios from 'axios';
import backgroundImg from '../../assets/backgroundLogin.png';

const API_KEY = 'AIzaSyC_2bW7uKHjoOR9TqqFWeuAsUZdPhJIqaI';

const apiLogin = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
})


export default function TelaLogin({ navigation}) {

    const[email, setEmail] = useState("teste@teste.com");
    const[password, setPassword] = useState("12345678");
    const[token, setToken] = useState(null);

    const Logar = ()=>{
        apiLogin.post('/accounts:signInWithPassword?key=' + API_KEY, {
            email, 
            password,
            returnSecureToken: true
        })
        .then( (response)=>{
            setToken(response.data.idToken);
            alert("Usuário logado com sucesso!");
            navigation.navigate('TelaPrincipal');
        })
        .catch( (err)=>{
            alert("Erro:" + err);
        })
    }


    return(
        <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>
                <TextInput placeholder="Senha" style={styles.input} value={password} onChangeText={setPassword}/>

                <TouchableOpacity onPress={Logar}>
                    <Text style={styles.btnLogar}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}