import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        height: "100%",
        flex: 1
    },

    container: {
        flex: 1,
        marginTop: 100
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

    input: {
        borderRadius: 6,
        borderColor: "2E3A69",
        borderWidth: 3,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 30,
        fontSize: 20,
        color: "#2E3A69"
    },

    btnLogar: {
        textAlign: "center",
        color: "#2E3A69",
        fontSize: 26,
        fontWeight: "bold",
        padding: 30
    }


})

export { styles };