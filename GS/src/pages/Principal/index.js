import { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import background from '../../assets/backgroundPrincipal.png';
import { styles } from './style';
import calculoImc from '../../assets/calculoImc.png';

export default function TelaPrincipal({ navigation }) {

    const navegarCalculadora = () => {
        navigation.navigate("TelaCalculadora");
    }
    return(
        <ImageBackground source={background} style={styles.backgroundImg}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Calcular IMC e Calculadora de Peso Ideal</Text>

                    <Text style={styles.informacoes}>
                        O índice de massa corporal (IMC) é uma medida que usa sua altura e peso
                        para saber se seu peso é saudável. O IMC leva em consideração as variações
                        naturais na forma do corpo, dando uma faixa de peso saudável para uma
                        determinada altura. Entretanto, para dizer se você é saudável os
                        profissionais de saúde não utilizam exclusivamente o seu IMC. Em caso
                        de dúvida consulte o seu médico.
                    </Text>

                    <Text style={styles.subTitle}>Como Calcular IMC?</Text>
                    <Text style={styles.informacoes}>
                        O índice de massa corporal (IMC) ou índice de massa corpórea é calculado
                        dividindo o peso (em quilogramas) pela altura ao quadrado (em metros).
                        Este é o índice recomendado pela OMS para avaliar o estado nutricional do indivíduo.
                    </Text>
                    <Image source={calculoImc} style={styles.calculoImg}/>
                    <Text style={styles.informacoes}>
                        Fórmula utilizada para calcular o IMC: divide-se o peso em quilos pela altura
                        ao quadrado (em metros).
                    </Text>
                    
                    <Text style={styles.informacoes}>
                        Calcular IMC requer apenas altura e peso, o índice de massa corporal é uma
                        ferramenta fácil e barata! Por exemplo, um adulto que pesa 70 kg e cuja
                        altura é 1,75 m terá um IMC de 22,9.
                    </Text>

                    <TouchableOpacity onPress={navegarCalculadora}>
                        <Text style={styles.btnCalcular}>Calcular IMC</Text>
                    </TouchableOpacity>

                    <Text style={styles.subTitle}>
                         O que significa o Índice de Massa Corporal e como é classificado?
                    </Text>
                    <Text style={styles.informacoes}>
                        Ele é uma maneira padronizada internacionalmente para determinar se um indivíduo
                        esta com seu peso adequado ou se ele é obeso. Calcular IMC é o método utilizado
                        pela OMS (Organização Mundial de Saúde) em estudos epidemiológicos. Entretanto
                        apresenta pouca fidedignidade, pois o mesmo não difere a massa magra da massa gorda.
                        Isso pode ser observado em um atleta com grande quantidade de massa magra que ao
                        calcular IMC mostrará um resultado acima do desejável, por conta da massa muscular
                        e não do excesso de gordura. Por isso, determinar o seu peso ideal vai muito além
                        do que calcular IMC que você deveria estar. Nem sempre estar acima do peso é um
                        sinal de problema.
                        Para determinar se o seu índice é um risco à saúde, um profissional de saúde realiza
                        avaliações adicionais além de calcular IMC. Essas avaliações incluem medidas de
                        espessura de dobras cutâneas, estimativa da massa muscular, medida da circunferência
                        abdominal, avaliações de dieta, atividade física e história familiar. Esse conjunto
                        é muito mais preciso para avaliar o seu estado nutricional do que apenas calcular o IMC.
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}