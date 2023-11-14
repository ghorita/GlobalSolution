import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        height: "100%",
        flex: 1
    },

    container: {
        marginTop: 80
    },

    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "left",
        padding: 30,
        color: "#2E3A69",
        width: 310
      },

    dados: {
        marginLeft: 20,
        fontWeight: "bold",
        color: "#2E3A69",
        marginTop: 20,
        marginBottom: 5
    },

    input: {
        backgroundColor: "white",
        width: 150,
        paddingVertical: 15,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#2E3A69",
        marginLeft: 20
    },

    alinhar: {
        flexDirection: "row",
        alignItems: "center"
    },

    btnCalcular: {
        textAlign: "center",
        color: "#2E3A69",
        fontSize: 26,
        fontWeight: "bold",
        padding: 10,
        marginTop: 30,
        borderWidth: 2,
        borderColor: "#2E3A69",
        marginHorizontal: 80,
        borderRadius: 7
    },

        modalContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },

    modalTitle: {
        textAlign: "center",
        color: "#2E3A69",
        fontWeight: "bold",
        fontSize: 36,
        marginTop: 60
    },

    modalResultado: {
        fontSize: 20,
        padding: 30,
        fontWeight: "bold"
    },

    tabelaImg: {
        height: 350,
        width: 350
    },

    btnVoltar: {
        textAlign: "center",
        color: "#2E3A69",
        fontSize: 26,
        fontWeight: "bold",
        padding: 30
    },

    btnHistorico: {
        textAlign: "center",
        color: "#2E3A69",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 40
    },

    modalScroll: {
        flex: 1,
        backgroundColor: "white"
    },

    containerHistorico: {
        borderWidth: 2,
        borderColor: "#2E3A69",
        borderRadius: 8,
        width: "60%",
        marginTop: 30
    },

    imcTitle: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        paddingBottom: 10
    },

    imcDados: {
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 16,
        color: "#2E3A69",
        marginBottom: 5,
    },

    lixo: {
        fontSize: 30,
        color: "#2E3A69",
        textAlign: "center",
        marginVertical: 15
    }
})

export { styles };