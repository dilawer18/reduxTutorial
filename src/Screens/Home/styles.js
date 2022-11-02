import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flatStyle: {
        flexDirection: "row", 
        alignItems: 'center', 
        backgroundColor: 'white',
        padding: 8, 
        borderRadius: 8, 
        justifyContent:'space-between'
    },
    container: {
        flex: 1,
    },
    cart: {
        flexDirection: "row",
        width: 88,
        height: 32,
        backgroundColor: '#008B8B',
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
        borderRadius: 4,
        marginLeft: 16


    },
    txtStyle: {
        color: 'white',
        fontWeight: 'bold'
    },
    addBtnStyle: {
        marginLeft: 16,
        backgroundColor: '#FF1493',
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "center"
    },
    screenDataStyle:{
        flex:1,
        position:'absolute',
        bottom:20,
        right:20
    }
});
export default styles