// import React, { useContext } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons, Fontisto } from "@expo/vector-icons";
// import { Text, View, TouchableOpacity, FlatList } from "react-native";
// import styles from "./home.style";
// import { Welcome } from "../components";
// import Carousel from "../components/home/Carousels";
// import Headings from "../components/home/Headings";
// import ProductRow from "../components/products/ProductRow";
// import { cartContext } from "../contexts/cartContext";
// const Home = ({navigation}) => {
//   const data = [
//     { id: "welcome", component: <Welcome /> },
//     { id: "carousel", component: <Carousel /> },
//     { id: "headings", component: <Headings /> },
//     { id: "productRow", component: <ProductRow /> },
//   ];

//   const renderItem = ({ item }) => <View key={item.id}>{item.component}</View>;
//   const { cart } = useContext(cartContext);
//   return (
//     <SafeAreaView>
//       <View style={styles.appBarWrapper}>
//         <View style={styles.appBar}>
//           <Ionicons name="location-outline" size={24} />
//           <Text style={styles.location}>Bhubaneswar, Odisha</Text>
//           <View style={{ alignItems: "flex-end" }}>
//             {cart.cart.length > 0 && (
//               <View style={styles.cartCount}>
//                 <Text style={styles.cartNumber}>{cart.cart.length}</Text>
//               </View>
//             )}
//             <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
//               <Fontisto name="shopping-bag" size={24} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// export default Home;

import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";
import styles from "./home.style";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousels";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";
import { cartContext } from "../contexts/cartContext";
import { IP as ip } from "@env";
const Home = ({ route, navigation }) => {
  const { cart } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { sortBy } = route.params || {};

  useEffect(() => {
    fetchProducts();
  }, [sortBy]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://${ip}:3000/api/products`, {
        params: { sortBy },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const data = [
    { id: "welcome", component: <Welcome /> },
    { id: "carousel", component: <Carousel /> },
    { id: "headings", component: <Headings /> },
    {
      id: "productRow",
      component: <ProductRow products={products} loading={loading} />,
    },
  ];

  const renderItem = ({ item }) => <View key={item.id}>{item.component}</View>;

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Bhubaneswar, Odisha</Text>
          <View style={{ alignItems: "flex-end" }}>
            {cart.length > 0 && (
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>{cart.length}</Text>
              </View>
            )}
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
