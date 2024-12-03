import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { validateText } from "../../services/validation";
import { colors } from "../../styles/palette";
// components
import TaskInput from "../../components/TaskInput";
import TasksList from "../../components/TasksList/TasksList";
import AddButton from "../../components/CustomElements/AddButton";

export type TaskItemType = {
  id: string;
  name: string;
};

const TodoListScreen = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [tasksList, setTasksList] = useState<TaskItemType[]>([]);

  const createNewTask = () => {
    const newTask: TaskItemType = {
      id: `${Date.now()}-${Math.random()}`,
      name: taskName.trim(),
    };
    setTasksList((prev) => [...prev, newTask]);
    setTaskName("");
  };

  const deleteTask = (id: string) => {
    setTasksList((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TaskInput taskName={taskName} setTaskName={setTaskName} />
      <TasksList tasksList={tasksList} deleteTask={deleteTask} />
      <View style={styles.add_btn}>
        <AddButton onPress={createNewTask} disabled={!validateText(taskName)} />
      </View>
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 70,
    paddingBottom: 40,
    backgroundColor: colors.purple01,
  },
  add_btn: {
    position: "absolute",
    bottom: 40,
    right: 40,
  },
});
