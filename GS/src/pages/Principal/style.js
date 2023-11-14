import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        height: "100%"
    },

    container: {
        flex: 1,
        alignSelf: "center",
        marginTop: 60,
        width: "95%",
    },

    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#2E3A69",
        width: 310,
        paddingBottom: 40,
        width: "100%"
    },

    subTitle: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        color: "#2E3A69",
        width: 310,
        paddingBottom: 40,
        width: "100%"
    },

    informacoes: {
        fontSize: 16,
        fontWeight: "600",
        width: "100%",
        paddingBottom: 40
    },

    calculoImg: {
        height: 240,
        width: "100%",
        marginBottom: 10
    },

    btnCalcular: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#2E3A69",
        fontSize: 26,
        borderWidth: 2,
        borderColor: "#2E3A69",
        width: 200,
        paddingVertical: 5,
        borderRadius: 8,
        alignSelf: "center",
        marginBottom: 40
    }
})

export { styles };