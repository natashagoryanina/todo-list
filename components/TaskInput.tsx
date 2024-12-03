import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/palette";
import Text from "./CustomElements/Text";

type TaskInputProps = {
  taskName: string;
  setTaskName: (name: string) => void;
};

const TaskInput = ({ taskName, setTaskName }: TaskInputProps) => {
  return (
    <View>
      <Text style={styles.label}>Create a new task:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={taskName}
        onChangeText={(newName: string) => setTaskName(newName)}
      />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  label: { marginBottom: 10, color: colors.purple03 },
  input: {
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 50,
    width: "100%",
    borderColor: colors.purple02,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: colors.white,
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: colors.purple03,
  },
});
