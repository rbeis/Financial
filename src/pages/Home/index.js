import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: "300,90",
    date: "17/09/2022",
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: "2.500,0",
    date: "20/09/2022",
    type: 1
  },
  {
    id: 3,
    label: 'Salário',
    value: "7.200,0",
    date: "22/09/2022",
    type: 1
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header name="Breno Reis" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
