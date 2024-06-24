import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import LoginScreen from "./apps/screens/LoginScreen";
import { ClerkProvider, SignedOut, SignedIn } from "@clerk/clerk-expo";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_bGl2ZS1tYXJsaW4tNTYuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View className="flex-1 bg-white">
        <StatusBar style="auto" />
        <SignedOut>
          <LoginScreen />
        </SignedOut>
        <SignedIn>
          <Text className="mt-10 ml-28">You are Signed In</Text>
        </SignedIn>
      </View>
    </ClerkProvider>
  );
}
