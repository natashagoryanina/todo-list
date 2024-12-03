import { Pressable, StyleSheet, View } from "react-native";
import Text from "../CustomElements/Text";
import { colors } from "../../styles/palette";

type TaskItemProps = {
  name: string;
  deleteTask: () => void;
};

const TaskItem = ({ name, deleteTask }: TaskItemProps) => {
  return (
    <Pressable onPress={deleteTask}>
      <View style={styles.container}>
        <Text style={styles.task_name}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    width: "100%",
    borderRadius: 15,
    backgroundColor: colors.purple02,
  },
  task_name: {
    color: colors.white,
  },
});
