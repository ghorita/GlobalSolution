import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../Cadastro/style';
import axios from 'axios';
import backgroundImg from '../../assets/background.png';

const api = axios.create({
    baseURL: ""
})

export default function TelaCadastro({ navigation }) {
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const Cadastrar = () => {
        const dados = { nome, email, senha };

        api
            .post("", dados)
            .then( (response) => {
                alert("Usuário cadastrado com sucesso!");
            })
            .catch( (err) =>{
                alert("Erro ao tentar cadastrar usuário!");
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
                    <TextInput placeholder="Senha" style={styles.input} value={senha} onChangeText={setSenha}/>

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