import { Text as RNText, StyleSheet, TextProps, TextStyle } from "react-native";

type CustomTextProps = TextProps & {
  style?: TextStyle | TextStyle[];
};

const Text = ({ style, ...props }: CustomTextProps) => {
  return <RNText style={[styles.defaultText, style]} {...props} />;
};

export default Text;

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },
});
