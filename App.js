import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ArchievedItem } from './components/archievedItem';
import { TaskInputField } from './components/taskInputField';
import { TaskItem } from './components/taskItem';

export default function App() {
  const [newtasks,setNewTasks]=useState([])
  const [archtasks,setArchTasks]=useState([])
  
  const addNewTask=(task)=>{
    if(task)  setNewTasks([task,...newtasks]) 
    else alert("INVALID INPUT") 

   
    Keyboard.dismiss();
  }
  const deletTask=(deletIndex)=>{
    setNewTasks(newtasks.filter((e,index)=>index != deletIndex))
  }

  const deletArchTask=(deletIndex)=>{
    setArchTasks(archtasks.filter((e,index)=>index != deletIndex))
  }

  const moveToArchieve=(archIndex)=>{
    let arcTask=newtasks[archIndex];
    
    setNewTasks(newtasks.filter((e,index)=>index != archIndex));
    console.log(arcTask);
    setArchTasks([arcTask,...archtasks])
  }

  return (
    <View >
      <TaskInputField  addNewTask={addNewTask}/>
      <View style={styles.secton}>
      <Text style={styles.header}> Tasks </Text>
        <ScrollView>
        {
        newtasks.map((e , index) =>  <TaskItem  taskName={e} index={index} key={index} deletTask={()=>{deletTask(index)}} moveToArchieve={()=>{moveToArchieve(index)}} />
        )
      }
        </ScrollView>
      </View>
  
      <View style={styles.secton}>
      <Text style={styles.header}> Tasks Done </Text>
        <ScrollView >
        {
        archtasks.map((e,index)=> <ArchievedItem  taskName={e} index={index+1} key={index} deletTask={()=>{deletArchTask(index)}} />)
      }
        </ScrollView >
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    marginTop: 35,
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: "#93BFCF",
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  secton: {
    height: "45%",
    overflow: "hidden",
  },
});
