// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/Login';
import AddServiceScreen from './components/AddService';
import DetailScreen from './components/Detail';
import EditServiceScreen from './components/EditService';
import CustomerScreen from './components/Customer';
import AddCustomerScreen from './components/AddCustomer';
import BottomTabs from './components/BottomTabs';
import TransactionScreen from './components/Transaction';
import TransactionDetailScreen from './components/TransactionDetail';
import CustomerDetailScreen from './components/CustomerDetail';
import EditCustomerScreen from './components/EditCustomer';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddService" component={AddServiceScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="EditService" component={EditServiceScreen} />
        <Stack.Screen name="Customer" component={CustomerScreen} />
        <Stack.Screen name="AddCustomer" component={AddCustomerScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
        <Stack.Screen name="CustomerDetail" component={CustomerDetailScreen} />
        <Stack.Screen name="EditCustomer" component={EditCustomerScreen} />

        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
          options={{title: 'Transaction detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
