import {
  GestureResponderEvent,
  Pressable,
  View,
  StyleSheet,
  ViewStyle,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../styles/palette";

type AddButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: ViewStyle;
};

const AddButton = ({ onPress, disabled, style }: AddButtonProps) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View style={[styles.btn_container, style]}>
        <AntDesign name="plus" size={30} color={colors.white} />
      </View>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  btn_container: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.purple02,
  },
});
