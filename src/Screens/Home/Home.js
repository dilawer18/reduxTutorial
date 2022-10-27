import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import store from '../../redux/store';

const Home = ({ route, navigation }) => {

    const [flatItem, setFlatItem] = useState(store.getState().state.myData)


    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            let data = store.getState().state.myData
            setFlatItem(data)
        })
        return () => {
            unsubscribe()
        }
    }, [route?.params])

    const onAddClick = ()=>{
        
    }


    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatStyle}>
                <View >
                <Text>{item?.title}</Text>
                <Text>{item?.desc}</Text>
                </View>
                {item.quantity !== 0 ? <View style={styles.cart}>
                    <TouchableOpacity
                    // onPress={onDec}
                    >
                        <Text style={styles.txtStyle}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtStyle}>{item.quantity}</Text>
                    <TouchableOpacity
                    // onPress={onInc}
                    >
                        <Text style={styles.txtStyle}>+</Text>
                    </TouchableOpacity>
                </View> :
                    <TouchableOpacity
                        style={styles.addBtnStyle}

                    >
                        <Text style={styles.txtStyle}>Add</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ margin: 16 }}>
                <FlatList
                    data={flatItem}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
                />
            </View>

        </SafeAreaView>
    );
};
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
        backgroundColor: 'red',
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "center"
    }
});
export default Home;









