import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, Modal, Image } from 'react-native';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { styles } from './style';
import backgroundImg from '../../assets/background.png'
import tabela from '../../assets/tabelaImc.png';

const api = axios.create({
    baseURL: ""
})

export default function TelaCalculadora() {

    const[visivel, setvisivel] = useState(false);
    const[historico, setHistorico] = useState(false);
    const[sexo, setSexo] = useState("");
    const[idade, setIdade] = useState("");
    const[altura, setAltura] = useState("");
    const[peso, setPeso] = useState("");
    const[resultado, setResultado] = useState(null);

    // const calcularImc = () => {
    //     if (altura && peso) {
    //         const weight = parseFloat(peso);
    //         const height = parseFloat(altura) / 100;
    //         const imc = weight / (height * height);
    //         setResultado(imc.toFixed(2));
    //     }
    // }

    const MostrarHistorico = () => {
        setHistorico(true);
    }

    const Calcular = () =>{
        const dados = { sexo, idade, altura, peso };

        api
            .post("", dados)
            .then( (response) => {
                alert("Resultado: " + response);
            })
            .catch( (err) => {
                if (altura && peso) {
                    const weight = parseFloat(peso);
                    const height = parseFloat(altura) / 100;
                    const imc = weight / (height * height);
                    setResultado(imc.toFixed(2));
                }
                alert("Erro ao calculaar, tente novamente!");
                setvisivel(true);
            })
    }

    const Deletar = (historicoId) => {
        api
            .delete(`/${historicoId}`)
            .then( (response) => {
                alert("Deletado com sucesso!");
            })
            .catch( (err) => {
                alert("Erro ao tentar deletar, tente novamente!");
            })
    }

    return(
        <ImageBackground source={backgroundImg} style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Calculadora de IMC</Text>

                    <Text style={styles.dados}>Sexo</Text>
                    <TextInput style={styles.input} value={sexo} onChangeText={setSexo}/>
                

                    <Text style={styles.dados}>Idade</Text>
                    <View style={styles.alinhar}>
                        <TextInput style={styles.input} value={idade} onChangeText={setIdade}/>
                        <Text style={styles.dados}>anos</Text>
                    </View>

                    <Text style={styles.dados}>Altura</Text>
                    <View style={styles.alinhar}>
                        <TextInput style={styles.input} value={altura} onChangeText={setAltura}/>
                        <Text style={styles.dados}>cm</Text>
                    </View>

                    <Text style={styles.dados}>Peso</Text>
                    <View style={styles.alinhar}>
                        <TextInput style={styles.input} value={peso} onChangeText={setPeso}/>
                        <Text style={styles.dados}>kg</Text>
                    </View>

                    <TouchableOpacity onPress={Calcular}>
                        <Text style={styles.btnCalcular}>Calcular</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={MostrarHistorico}>
                        <Text style={styles.btnHistorico}>Exibir Histórico</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={visivel}
                    onRequestClose={() => {
                        setvisivel(!visivel);
                    }}>
                    <ScrollView style={styles.modalScroll}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Resultados</Text>

                            <Text style={styles.modalResultado}>Seu IMC é de {resultado}kg/m2</Text>

                            <Image source={tabela} style={styles.tabelaImg}/>

                            <TouchableOpacity onPress={() => setvisivel(!visivel)}>
                                <Text style={styles.btnVoltar}>voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Modal>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={historico}
                    onRequestClose={() => {
                        setHistorico(!historico);
                    }}>
                        <ScrollView style={styles.modalScroll}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalTitle}>Histórico</Text>

                                <View style={styles.containerHistorico}>
                                    <Text style={styles.imcTitle}>22.8{resultado}kg/m2</Text>
                                    <Text style={styles.imcDados}>Idade: {idade}</Text>
                                    <Text style={styles.imcDados}>Altura: {altura}</Text>
                                    <Text style={styles.imcDados}>Peso: {peso}</Text>

                                    <TouchableOpacity onPress={Deletar}>
                                        <FontAwesome5 name="trash" style={styles.lixo}/>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity onPress={() => setHistorico(!historico)}>
                                    <Text style={styles.btnVoltar}>voltar</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                </Modal>
            </ScrollView>
        </ImageBackground>
    )
}