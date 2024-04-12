import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, SetGoal, Timmer, Book } from './screens';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Welcome">
				<Stack.Screen
					name="Welcome"
					component={Welcome}
					options={{ headerShown: false }}
				/>
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

export default function App() {
	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
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
