import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, settitle] = useState('');

    const handleAddTask = () => {
        if (title.trim() !== '') {
            onAddTask(title);
            settitle('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput
             style={styles.input}
             placeholder="Enter to-do task"
             value={title}
             onChangeText={(text) => settitle(text)}
             keyboardType="default"
             returnKeyType="done" 
            />
            <Button title="Add to-do task" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;