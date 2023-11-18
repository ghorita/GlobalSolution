import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    background: {
        height: "100%",
        flex: 1
    },

    title:{
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 60,
        textAlign: "left",
        padding: 40,
        color: "#2E3A69",
        width: 220
    },

    container: {
        flex: 1
    },

    containerDados:{
        marginTop: 70
    },

    input: {
        borderRadius: 6,
        borderColor: "2E3A69",
        borderWidth: 3,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 30,
        fontSize: 20,
        backgroundColor: "white"
    },

    btnCadastrar: {
        textAlign: "center",
        color: "#2E3A69",
        fontSize: 26,
        fontWeight: "bold",
        padding: 30
    },

    btnLogin: {
        textAlign: "right",
        marginRight: 50,
        marginTop: 20,
        color: "#2E3A69",
        fontSize: 18, 
        fontWeight: "500",
        marginTop: 90,
    }

})

export { styles };