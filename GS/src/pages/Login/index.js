import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './style';
import axios from 'axios';
import backgroundImg from '../../assets/backgroundLogin.png';

const api = axios.create({
    baseURL: ""
})

export default function TelaLogin({ navigation}) {

    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const Logar = () =>{
        const dados = { email, senha };

        api
            .post("", dados)
            .then( (response) =>{
                alert("Usuário logado com sucesso!");
            })
            .catch( (err) =>{
                alert("Erro ao tentar logar!");
            })
    }


    return(
        <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <TextInput placeholder="Nome" style={styles.input} value={email} onChangeText={setEmail}/>
                <TextInput placeholder="Email" style={styles.input} value={senha} onChangeText={setSenha}/>

                <TouchableOpacity onPress={Logar}>
                    <Text style={styles.btnLogar}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}