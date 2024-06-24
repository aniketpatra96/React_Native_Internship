import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
// import Link from "expo-router";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View className="mt-20">
      <Image
        className="w-full h-[200px] object-contain"
        source={require("../../assets/images/login.jpeg")}
      />
      <View className=" ml-2 p-8 bg-white mt-[-20px] rounded-t-3xl shadow-md ">
        <Text className="text-[26px] font-bold">Community Marketplace</Text>
        <Text className="text-[18px] text-slate-500 mt-6">
          Buy Sell Marketplace where you can selll old item and make real money
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className="p-3 bg-blue-500 rounded-full mt-20"
        >
          <Text className="text-white text-center text-[18px]">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
