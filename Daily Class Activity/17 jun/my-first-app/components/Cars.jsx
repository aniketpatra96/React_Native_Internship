import { View,Text, Image, StyleSheet } from "react-native";

const Cars = ({Cars=[]}) => {
    const getImage = (imageName) => {
        switch(imageName) {
          case 'Audi':
            return require('../images/Audi.jpg');
          case 'BMW':
            return require('../images/BMW.jpg');
        }
      }
    const styles = StyleSheet.create({
        text:{
            fontFamily: 'Times New Roman',
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 10,
        },
        subtext:{
            fontFamily: 'Times New Roman',
            fontSize: 20,
            color: 'black',
            fontWeight: 'semibold',
            marginTop: 10,
            marginBottom: 10,
        }
    });
    return(
        Cars.map((Car) => {
            const image = `C:/Users/drugs/OneDrive/Desktop/my-first-app/images/Audi.jpg`;
            return(
                <View key={Car.id}>
                    <Text style={styles.text}>Car Name :- {Car.name}</Text>
                    <Image source={getImage(Car.name)} style={{
                        width:200,
                        height:150
                    }}/>
                    <Text style={styles.subtext}>Car Price :- ${Car.price}</Text>
                </View>
            )
        })
    )
}

export default Cars;