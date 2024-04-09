import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, SetGoal, Timmer, Book } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Book">
				<Stack.Screen
					name="Book"
					component={Book}
					options={{
						headerShown: true,
						headerTitle: 'Select Book',
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="Welcome"
					component={Welcome}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="SetGoal"
					component={SetGoal}
					options={{
						headerShown: true,
						headerTitle: 'Daily Goal',
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="Timmer"
					component={Timmer}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
