import { useCallback, useEffect } from "react";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import TodoListScreen from "./screens/TodoListScreen/TodoListScreen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLayoutRootView();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <TodoListScreen />;
}
