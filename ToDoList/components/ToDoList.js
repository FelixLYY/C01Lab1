import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialStrings }) => {
    const [toDos, setToDos] = useState(initialStrings.map((strings) => ({ id: uuidv4(), title: strings})));
    
    const addToDo = (newTitle) => {
        const newToDo = { id: uuidv4(), title: newTitle};
        setToDos((prevToDos) => [...prevToDos, newToDo]); 
    };

    const removeToDo = (id) => {
        setToDos((prevToDos) => prevToDos.filter((title) => title.id !== id));
    };

    return (
        <View style={StyleSheet.todoListContainer}>
            {toDos.map((toDos) => (
                <View key={toDos.id} style={styles.todoItem}> 
                    <Text>{toDos.title}</Text>
                    <Button title="remove" onPress={() => removeToDo(toDos.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

ToDoList.defaultProps = {
    initialStrings: [""],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;