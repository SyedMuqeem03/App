import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown:false }} />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen 
          name="home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarStyle: { height: 70, position: 'absolute', backgroundColor: "lightblue", width: '100%', borderRadius: 70 },
            tabBarIcon: ({ color }) => <Ionicons name="people-circle-outline" size={24} color={color} />
          }}
        />
        <Tabs.Screen 
          name="settings"
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => <SimpleLineIcons name="settings" size={24} color={color} />
          }}
        />
      </Tabs>
    </Stack>
  );
}





// export default function TabLayout() {
//   return (
//    <Tabs screenOptions={{headerShown:false}}>
//     <Tabs.Screen  name='home'
//     options={{tabBarLabel:'Home',
//       tabBarIcon:({Color})=><Ionicons name="home" size={24} color='gray' />
//     }}
//     />
//      <Tabs.Screen name='profile'
//     options={{tabBarLabel:'Profile', tabBarStyle:{height:70,position:'absolute',backgroundColor:"lightblue",width:390,borderRadius:70},
//       tabBarIcon:({Color})=><Ionicons name="people-circle-outline" size={24} color="gray" />
//     }}
//     /> 
//     <Tabs.Screen name='Settings'
//     options={{tabBarLabel:'Settings',
//       tabBarIcon:({Color})=><SimpleLineIcons name="settings" size={24} color="gray" />
//     }}
//     />
   
//    </Tabs>
//    )
//     return (
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{
//           headerShown:true
//         }}/>
//       </Stack>
//     );
    
// }
 
// import { View, Text } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

// const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerShown: false,
//           tabBarStyle: { height: 70, position: 'absolute', backgroundColor: "lightblue", borderRadius: 20 },
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ color }) => <Ionicons name="people-circle-outline" size={24} color={color} />,
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             tabBarLabel: 'Settings',
//             tabBarIcon: ({ color }) => <SimpleLineIcons name="settings" size={24} color={color} />,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
