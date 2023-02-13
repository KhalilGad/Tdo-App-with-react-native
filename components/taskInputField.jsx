import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import {MaterialIcons} from "@expo/vector-icons" 
import { AntDesign } from '@expo/vector-icons'; 

export const TaskInputField =(props)=>{
    const [task,setTask]= useState(" ")

    const handleAddTask=( value)=>{
        props.addNewTask(value);
        setTask(null);
    }
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Your Task"
          style={styles.inputTxt}
          placeholderTextColor={"white"}
          onChangeText={(txt) => {
            setTask(txt);
            console.log(task);
          }}
          value={task}
        />
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              handleAddTask(task);
              console.log(task);
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    flexDirection: "row",
  },
  inputTxt: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    padding: 10,
    margin: 5,
    borderColor: "#6096B4",
    backgroundColor: "#93BFCF",
    color: "white",
    
  },
  btn: {
    width: "100%",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#6096B4",
  },
});