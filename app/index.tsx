import ExpenseCard from '@/components/ExpenseCard';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

export default function Home(){
    const router = useRouter();

    const [expenses] = useState([
        {id:"1", title:"Groceries", amount:900, date:"Nov 20, 2025"},
        {id:"2", title:"Petrol", amount:800, date:"Nov 21, 2025"},
        {id:"3", title:"Entertainment", amount:1900, date:"Nov 22, 2025"}
    ]);

    return(
        <View style={styles.container}>
            <Button title='Add Expense' onPress={() => router.push("/add")}/>
            <FlatList
                data={expenses}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><ExpenseCard item={item}/>}
                style={{marginTop:20}}
                />
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#f1f3f5"
    }
});