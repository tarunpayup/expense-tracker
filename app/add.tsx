import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddExpense(){
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");

    const saveExpense = ()=>{
        if(!title || !amount){
            Alert.alert("Error","Please fill all the details");
        }
        Alert.alert("Saved", "Data is saved successfully");
    };

    return(
        <View>
            <Text>Expense Title</Text>
            <TextInput
                placeholder='e.g., Electricity Bill'
                onChangeText={setTitle}
                value={title}
                />

            <Text>Expense Amount</Text>
            <TextInput
                placeholder='e.g., 2200'
                onChangeText={setAmount}
                value={amount}
                />

                <Button title='Save Expense' onPress={saveExpense}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#fff"
    },

    label:{
        fontSize:20,
        fontWeight:"500",
        marginTop:12
    },
    
    input:{
        borderWidth:1,
        borderColor:"#888",
        borderRadius:8,
        padding:12,
        marginTop:10
    }
});