import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import AuthScreen from './screens/AuthScreen';
import CatalogScreen from './screens/CatalogScreen';
import VehicleDetailScreen from './screens/VehicleDetailScreen';
import OwnerDashboardScreen from './screens/OwnerDashboardScreen';
import EmergencyScreen from './screens/EmergencyScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#07162c' },
        headerTintColor: '#ffffff',
        tabBarActiveTintColor: '#00c39a',
        tabBarInactiveTintColor: '#8898aa',
        tabBarStyle: { backgroundColor: '#07162c' }
      }}
    >
      <Tab.Screen name="Catalogue" component={CatalogScreen} options={{ title: "NDAO'AUTO" }} />
      <Tab.Screen name="Urgence" component={EmergencyScreen} options={{ title: "Contact Urgence" }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="VehicleDetail" component={VehicleDetailScreen} options={{ title: 'Détails du véhicule', headerStyle: { backgroundColor: '#07162c' }, headerTintColor: '#fff' }} />
        <Stack.Screen name="OwnerDashboard" component={OwnerDashboardScreen} options={{ title: 'Tableau de bord (Mouhamed Ndao)', headerStyle: { backgroundColor: '#07162c' }, headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
