import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, Modal, Image } from 'react-native';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { styles } from './style';
import backgroundImg from '../../assets/background.png'
import tabela from '../../assets/tabelaImc.png';

const api = axios.create({
    baseURL: "https://gs02-43d78-default-rtdb.firebaseio.com"
})

export default function TelaCalculadora({ navigation }) {

    const[visivel, setvisivel] = useState(false);
    const[historico, setHistorico] = useState(false);
    const [historicoList, setHistoricoList] = useState([]);
    const[sexo, setSexo] = useState("");
    const[idade, setIdade] = useState("");
    const[altura, setAltura] = useState("");
    const[peso, setPeso] = useState("");
    const[resultado, setResultado] = useState(null);

    const navegarTelaPrinciapl = () => {
        navigation.navigate("TelaPrincipal");
    }

    const MostrarHistorico = () => {
        api
          .get("/lista.json")
          .then((response) => {
            if (response.data) {
              setHistoricoList(Object.entries(response.data));
              setHistorico(true);
            }
          })
          .catch((err) => {
            alert("Erro ao carregar o histórico, tente novamente!");
          });
      };
    

    const Calcular = () =>{
        const dados = { sexo, idade, altura, peso, resultado };

        api
            .post("/lista.json", dados)
            .then( (response) => {
                if (altura && peso) {
                    const weight = parseFloat(peso);
                    const height = parseFloat(altura) / 100;
                    const imc = weight / (height * height);
                    setResultado(imc.toFixed(2));
                }
                setvisivel(true);
            })
            .catch( (err) => {
                alert("Erro ao calculaar, tente novamente!");
            })
    }

    const Deletar = (historicoId) => {
        api
          .delete(`/lista/${historicoId}.json`)
          .then((response) => {
            alert("Deletado com sucesso!");
            // Atualiza a lista de histórico após a remoção
            setHistoricoList((prevList) =>
              prevList.filter(([id, _]) => id !== historicoId)
            );
          })
          .catch((err) => {
            alert("Erro ao tentar deletar, tente novamente!");
          });
      };

    return(
        <ImageBackground source={backgroundImg} style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={navegarTelaPrinciapl}>
                        <Ionicons name="arrow-back-outline" style={styles.icon}/>
                    </TouchableOpacity>

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
                    animationType="slide"
                    transparent={true}
                    visible={historico}
                    onRequestClose={() => {
                        setHistorico(!historico);
                    }}>
                    <ScrollView style={styles.modalScroll}>
                        <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Histórico</Text>

                        {historicoList.map(([historicoId, historicoData]) => (
                            <View key={historicoId} style={styles.containerHistorico}>
                            <Text style={styles.imcTitle}>{historicoData.resultado}kg/m2</Text>
                            <Text style={styles.imcDados}>Idade: {historicoData.idade}</Text>
                            <Text style={styles.imcDados}>Altura: {historicoData.altura}</Text>
                            <Text style={styles.imcDados}>Peso: {historicoData.peso}</Text>

                            <TouchableOpacity onPress={() => Deletar(historicoId)}>
                                <FontAwesome5 name="trash" style={styles.lixo} />
                            </TouchableOpacity>
                            </View>
                        ))}

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