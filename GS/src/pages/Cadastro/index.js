import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../Cadastro/style';
import axios from 'axios';
import backgroundImg from '../../assets/background.png';


const API_KEY = 'AIzaSyC_2bW7uKHjoOR9TqqFWeuAsUZdPhJIqaI';


const apiCadastro = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
});


export default function TelaCadastro({ navigation }) {
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const Cadastrar = ()=>{
        apiCadastro.post('/accounts:signUp?key=' + API_KEY,{
            nome, email, password
        })
        .then( (response)=> {
            alert("Usuário cadastrado com sucesso!");
            navigation.navigate('TelaLogin');
        })
        .catch( (err)=>{
            alert("Erro" + err);
        })
    }

    const navegarLogin = () => {
        navigation.navigate('TelaLogin');
    }

    return(
        <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.containerDados}>
                    <Text style={styles.title}>Criar Conta</Text>

                    <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome}/>
                    <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>
                    <TextInput placeholder="Senha" style={styles.input} value={password} onChangeText={setPassword}/>

                    <TouchableOpacity onPress={Cadastrar}>
                        <Text style={styles.btnCadastrar}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navegarLogin}>
                        <Text style={styles.btnLogin}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}