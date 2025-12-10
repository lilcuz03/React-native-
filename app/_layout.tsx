import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="id" />
        </Stack>
        <Stack.Screen
          name="auth"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="details"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="app"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
