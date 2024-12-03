import { FlatList, StyleSheet, View } from "react-native";
import { TaskItemType } from "../../screens/TodoListScreen/TodoListScreen";
// components
import TaskItem from "./TaskItem";
import Text from "../CustomElements/Text";

type TasksListProps = {
  tasksList: TaskItemType[];
  deleteTask: (id: string) => void;
};

const TasksList = ({ tasksList, deleteTask }: TasksListProps) => {
  return (
    <View>
      {tasksList.length === 0 ? (
        <Text style={styles.empty_state}>No tasks yet!</Text>
      ) : (
        <FlatList
          data={tasksList}
          renderItem={({ item }) => (
            <TaskItem name={item.name} deleteTask={() => deleteTask(item.id)} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  empty_state: {
    textAlign: "center",
    marginTop: 20,
  },
});
