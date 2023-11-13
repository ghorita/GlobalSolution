import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../Cadastro/style';
import axios from 'axios';

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
        <View style={styles.container}>
            <Text style={styles.title}>Tela Cadastro</Text>

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
    );
}