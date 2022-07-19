import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import LoginScreen from './Components/LoginScreen';
import ToDoList from './Components/TodoList';
import 'react-native-gesture-handler';

export const firebaseConfig = {
  apiKey: "AIzaSyA-UNc5Qguslo99Jc3-mKHfJr39eeq85Ps",
  authDomain: "todolist-b4339.firebaseapp.com",
  projectId: "todolist-b4339",
  storageBucket: "todolist-b4339.appspot.com",
  messagingSenderId: "955932952316",
  appId: "1:955932952316:web:5fa00a5d890b8ccfb23979",
  measurementId: "G-R16SX02SXQ"
};


firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
        console.log('We are authenticated now!');
    }
    // Do other things
});

const MainNavigator = createStackNavigator(
    {
        LoginScreen: LoginScreen,
        ToDoList: ToDoList,
    },
    {
        initialRouteName: 'LoginScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
    }
);

const AppContainer = createAppContainer(MainNavigator)

export default function App() {
    return (
        <AppContainer />
    )
}  