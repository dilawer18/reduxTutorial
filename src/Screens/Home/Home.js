import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import NavigationStrings from '../../constants/NavigationStrings';
import { decrement, increment } from '../../redux/action';
import store from '../../redux/store';

const Home = ({ route, navigation }) => {
    
const storeData=useSelector(state=>state.myData)
let arrLen=0
    for (let index = 0; index < storeData.length; index++) {
       if (storeData[index].quantity>0) {
        arrLen=arrLen+1
       }  
       else{
        continue
       }
    }
console.log("StoreData",storeData)

const onInc=(item)=>{
    store.dispatch(increment(item.quantity,item._id))
}
const onDec=(item)=>{
    store.dispatch(decrement(item.quantity,item._id))
}
    const renderItem = ({ item,index }) => {
        return (
            <TouchableOpacity
             onPress={()=>navigation.navigate(NavigationStrings.SECOND_SCREEN ,{title:item.title , desc:item.desc})}
              style={styles.flatStyle}>
               
                <View>
                <Text>{item?.title}</Text>
                <Text>{item?.desc}</Text>
                </View>
        
                {item.quantity>=1 ? <View style={styles.cart}>
                    <TouchableOpacity
                    onPress={()=>onDec(item)}
                    >
                        <Text style={styles.txtStyle}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtStyle}>{item.quantity}</Text>
                    <TouchableOpacity
                    onPress={()=>onInc(item)}
                    >
                        <Text style={styles.txtStyle}>+</Text>
                    </TouchableOpacity>
                </View> :
                    <TouchableOpacity
                        style={styles.addBtnStyle}
                        onPress={()=>onInc(item)}
                    >
                        <Text style={styles.txtStyle}>Add</Text>
                    </TouchableOpacity>
                }
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={{flex:1, margin: 16 }}>
                <FlatList
                    data={storeData}
                    renderItem={renderItem}
                    extraData={storeData}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
                />
            </View>
            <View style={styles.screenDataStyle}>
                <Text>ScreenData:{arrLen}</Text>
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
    },
    screenDataStyle:{
        flex:1,
        position:'absolute',
        bottom:20,
        right:20
    }
});
export default Home;
