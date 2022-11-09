import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import CheckBox from "expo-checkbox";
import { useEffect, useState } from 'react';

interface TaskInputProps{
    name: string,
    onRemove: () => void;
    setCounterCompletedTask: any;
}

export function TaskInput(props : TaskInputProps){
    const [isComplete, setIsComplete] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    
    function handleCheckbox(){
        setIsComplete(!isComplete)
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        if (!isComplete) {
            props.setCounterCompletedTask((prevCount) => {
            if (prevCount !== 0) {
              return prevCount - 1;
            }
    
            return prevCount;
          });
        }
    
        if (isComplete) {
            props.setCounterCompletedTask((prevCount) => prevCount + 1);
        }
      }, [isComplete, props.setCounterCompletedTask]);

    return(
        <View style={styles.container}>
            <CheckBox
                style={{borderRadius: 10}}
                value={isComplete}
                onValueChange={() => handleCheckbox()}
                color={isComplete ? "#5E60CE" : undefined}
            />

            <Text style={[styles.task, isChecked ? styles.taskChecked : styles.task]}>
                {props.name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Image
                    source={require('../../../assets/trash.png')}
                    style={styles.deleteTaskImg}
                />
            </TouchableOpacity>
        </View>
    )
}