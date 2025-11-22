import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ExpenseCard({item}){
    return(
        <View style={styles.card}>
            <Text style={styles.title}>item.title</Text>
            <Text style={styles.amount}>item.amount</Text>
            <Text style={styles.date}>item.date</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        marginVertical:10,
        elevation:3
    },
    title:{
        fontSize:18,
        fontWeight:"600"
    },
    amount:{
        fontSize:16,
        fontWeight:"bold",
    },
    date:{
        fontSize:14,
        marginTop:4,
        color:"#AAAAAA"
    }

});