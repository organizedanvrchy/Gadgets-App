import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return (
    <FontAwesome
      size={ 24 } {...props}
      style={{ color: "#1BC464" }}
    />
  );
}

const TabsLayout = () => {
  return (
    <SafeAreaView
      edges={ ['top'] }
      style={ styles.safeArea }
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1BC464",
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarLabelPosition: 'below-icon',
          tabBarItemStyle: { 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 55,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Shop",
            tabBarIcon(props) {
              return (
                <TabBarIcon
                  {...props}
                  name="shopping-cart"
                />
              );
            }
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            tabBarIcon(props) {
              return (
                <TabBarIcon
                  {...props}
                  name="book"
                />
              );
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default TabsLayout;
