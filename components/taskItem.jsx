import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 




export const TaskItem=(props)=>{
    return(
        <View key={props.index} >
            <View style={styles.container}>

                <Text style={styles.txt} color="red">{props.taskName} </Text>
                <TouchableOpacity style={styles.btn} onPress={()=>{props.deletTask()}}>
                <FontAwesome name="remove" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>{props.moveToArchieve() }}>
                <MaterialIcons name="archive" size={24} color="white" />
                </TouchableOpacity>
            </View>
        <View style={styles.seprator }></View>
        </View>
    )
}

 const styles = StyleSheet.create({
   container: {
     alignItems: "center",
     marginTop: 5,
     marginStart: 10,
     marginEnd: 55,
     flexDirection: "row",
   },
   txt: {
     color: "gray",
     width: "80%",
     fontSize: 16,
     fontWeight: "700",
     padding: 5,
   },
   btn: {
     margin: 5,
     padding: 10,
     borderRadius: 20,
     backgroundColor: "#6096B4",
   },
   seprator: {
     flexDirection: "column",
     margin: 5,
     width: "100%",
     borderBottomWidth: 1,
     borderBottomColor: "#6096B4",
   },
 });