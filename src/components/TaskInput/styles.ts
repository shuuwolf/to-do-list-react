import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 20
    },
    button: {
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: 'trasparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    task:{
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
    },
    taskChecked:{
        flex: 1,
        fontSize: 16,
        color: '#808080',
        marginLeft: 16,
        textDecorationLine: 'line-through',
    },
    deleteTaskImg:{
        width: 32,
        height: 32,
    }
});