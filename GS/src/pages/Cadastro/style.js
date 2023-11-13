import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 40,
        textAlign: "center",
        padding: 40,
        color: 'black'
    },

    container: {
        flex: 1
    },

    input: {
        borderRadius: 6,
        borderColor: "black",
        borderWidth: 3,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 30,
        fontSize: 20,
        color: "red"
    },

    btnCadastrar: {
        textAlign: "center",
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
        padding: 30
    },

    btnLogin: {
        textAlign: "right",
        marginRight: 50,
        marginTop: 20
    }

})

export { styles };