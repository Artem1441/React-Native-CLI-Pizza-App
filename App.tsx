import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconLogo from './assets/icons/IconLogo';
import CardItem from './src/components/CardItem';

const pizzasDefault = [
  {
    id: 1,
    name: "Pepperoni",
    url: "https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_584x584.webp",
    price: 9.99
  },
  {
    id: 2,
    name: "Cheese",
    url: "https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_584x584.webp",
    price: 9.99
  },
  {
    id: 3,
    name: "BBQ",
    url: "https://dodopizza-a.akamaihd.net/static/Img/Products/45cc8ffb190c4a28aaf1863a67f675c7_584x584.webp",
    price: 9.99
  },
  {
    id: 4,
    name: "Ham and cheese",
    url: "https://dodopizza-a.akamaihd.net/static/Img/Products/cea570842b754c52b786c231c65bd2e2_584x584.webp",
    price: 9.99
  },
  {
    id: 5,
    name: "Meat",
    url: "https://dodopizza-a.akamaihd.net/static/Img/Products/18dbb12240b041a191c9dc73c9c1f4ef_584x584.webp",
    price: 9.99
  },
  {
    id: 6,
    name: "Home",
    url: "https://dodopizza-a.akamaihd.net/static/Img/Products/1737ebbfb03148a291f8b3060cd9f0a1_584x584.webp",
    price: 9.99
  },
  {
    id: 7,
    name: "Hawaiian",
    url: "https://dodopizza-a.akamaihd.net/static/Img/Products/9b0c599124a8414f89fd59967f3baa3d_584x584.webp",
    price: 9.99
  },
  {
    id: 8,
    name: "Margarita",
    url: "https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_584x584.webp",
    price: 9.99
  },
]

const App = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [search, setSearch] = useState("")
  const [pizzas, setPizzas] = useState(pizzasDefault)

  useEffect(() => {
    if (search) {
      setPizzas(pizzasDefault.filter(pizza => pizza.name.includes(search)))
    } else {
      setPizzas(pizzasDefault)
    }
  }, [search])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor="white" />
      <ScrollView style={styles.container}>

        <View style={styles.logoContainer}>
          <IconLogo />
          <Text style={styles.logoName}>Our company</Text>
        </View>

        <View style={styles.topContainer}>
          <Text style={styles.text}>Магазин пиццы</Text>
          <TouchableOpacity onPress={() => setIsOpenSearch(!isOpenSearch)}>
            <MaterialIcons name="search" size={30} color="gray" />
          </TouchableOpacity>
        </View>

        {isOpenSearch ?
          <TextInput
            placeholder='Search Pizza'
            placeholderTextColor='#808e9b'
            style={styles.input}
            onChangeText={(prev) => setSearch(prev)}
            value={search}
          />
          : null}
        <Text style={styles.textDes}>
          Какое-то очень длинное и навязчивое описание нашей пиццы...
        </Text>

        <View style={styles.imgContainer}>
          {pizzas.map(pizza => <CardItem key={pizza.id} name={pizza.name} url={pizza.url} price={pizza.price} />)}
        </View>

        <TouchableOpacity style={styles.orderBtn} onPress={() => Alert.alert("Your order is on its way")}>
          <Text style={styles.orderBtnText}>
            Order
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#808e9b",
    paddingBottom: 10
  },
  logoName: {
    fontSize: 24,
    color: "black",
    marginLeft: 10,
    fontFamily: "Oswald-Regular"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: "black"
  },
  textDes: {
    marginTop: 15,
    fontSize: 16,
    color: "gray"
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  orderBtn: {
    backgroundColor: "orange",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    marginVertical: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  orderBtnText: {
    fontSize: 18,
    color: "white",
    fontWeight: "500"
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
    borderWidth: 1,
    borderColor: "#808e9b",
  }
})

export default App;
