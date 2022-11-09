import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import { styles } from './styles';

import { TaskInput } from '../../components/TaskInput';

export default function Home() {
  const [task, setTask] = useState<string[]>([])
  const [taskName, setTaskName] = useState('');

  const [counterCreatedTask, setCounterCreatedTask] = useState(0)
  const [counterCompletedTask, setCounterCompletedTask] = useState(0)

  function handleTaskAdd(){
    if(task.includes(taskName)){
      setCounterCompletedTask(counterCompletedTask + 1);
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
    }
    
    setTask(prevState => [...prevState , taskName]);
    setTaskName('');
    setCounterCreatedTask(counterCreatedTask + 1)
  }

  function acceptTaskRemove(name: string){
    setTask(prevState => prevState.filter(task => task !== name));
    setCounterCreatedTask(counterCreatedTask - 1);
    setCounterCompletedTask(counterCompletedTask - 1);
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a task ${name}?`, [
      {
        text: 'Sim',
        onPress: () => acceptTaskRemove((name)),
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.ImgContainer}>
        <Image
          source={require('../../../assets/Logo.png')}
          style={styles.imgLogo}
        />
      </View>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={e => setTaskName(e)}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.InfoTextContainer}>
          <Text style={[styles.infoText, {color: '#4EA8DE'}]}>
            Criadas
          </Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counterCreatedTask}</Text>
          </View>
        </View>

        <View style={styles.InfoTextContainer}>
          <Text style={[styles.infoText, {color: '#8284FA'}]}>
            Concluídas
          </Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counterCompletedTask}</Text>
          </View>
        </View>
      </View>

      <FlatList 
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
          <View style={styles.ImgContainerWithNoTask}>
            <Image
              source={require('../../../assets/Clipboard.png')}
              style={styles.imgLogoWithNoTask}
            />
          </View>
          <Text style={styles.listEmptyText}>
            Você ainda não tem tarefas cadastradas
          </Text>

          <Text style={styles.listEmptySubText}>
            Crie tarefas e organize seus itens e fazer
          </Text>
          </>
        )}
        data={task}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TaskInput 
              key={item} 
              name={item}
              onRemove={() => handleTaskRemove(item)} 
              setCounterCompletedTask={setCounterCompletedTask}
            />
        )}
      />

    </View>
  )
}