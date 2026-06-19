import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InvoiceScreen } from '@/screens/Invoices';
import {
  SearchInvoicesScreen,
  SearchInvoicesOptions,
} from '@/screens/SearchInvoices';
//import BillDetailScreen, { billDetailHeaderOptions } from './BillDetailScreen';

const InvoiceStack = createNativeStackNavigator();

export const InvoiceStackNavigator = () => {
  return (
    <InvoiceStack.Navigator screenOptions={{ headerShown: false }}>
      <InvoiceStack.Screen name="InvoiceHome" component={InvoiceScreen} />
      <InvoiceStack.Screen
        name="SearchInvoices"
        component={SearchInvoicesScreen}
        options={({ navigation }) => SearchInvoicesOptions(navigation)}
      />
      {/* <InvoiceStack.Screen
        name="DeviceList"
        component={BillDetailScreen}
        options={({ navigation }) => billDetailHeaderOptions(navigation)}
      /> */}
    </InvoiceStack.Navigator>
  );
};
