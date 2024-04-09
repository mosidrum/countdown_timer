import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, SetGoal, Timmer } from './screens';
import { SetTime } from './components';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Welcome">
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
				<Stack.Screen
					name="SetTime"
					component={SetTime}
					options={{
						headerShown: true,
						headerTitle: 'Set Time',
						headerTitleAlign: 'center',
					}}
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
