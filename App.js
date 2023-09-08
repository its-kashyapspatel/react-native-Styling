import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    // StyleSheet API

    // <View style={styles.container}>
    //   <Text style={styles.title}>StyleSheet API</Text>
    // </View>

    // Multiple Styles

    // <View style={styles.container}>
    //   <View style={[styles.box, styles.lightbluebg]}>
    //     <Text>LightBlue Box</Text>
    //   </View>
    //   <View style={[styles.box, styles.lightgreenbg]}>
    //     <Text>LightGreen Box</Text>
    //   </View>
    // </View>

    // Box Model

    // <View style={styles.container}>
    //   <View style={[styles.box, styles.lightbluebg]}>
    //     <Text>LightBlue Box</Text>
    //   </View>
    //   <View style={[styles.box, styles.lightgreenbg]}>
    //     <Text>LightGreen Box</Text>
    //   </View>
    // </View>

    // Box Shadow
    
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style Inheritance<Text style={styles.boldText}> in Bold</Text></Text>
      </View>
      <View style={[styles.box, styles.lightbluebg, styles.boxShadow]}>
        <Text>LightBlue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenbg]}>
        <Text>LightGreen Box</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:"plum", padding:60},
  darkMode: {backgroundColor:"black"},
  darkModeText: {color:"white"},
  boldText: {fontWeight:"bold"},
  title: {fontSize:20, fontWeight:"bold", color:"white"},
  box: {
    // width:100,
    width:"50%",
    // height:100,
    height:"25%",
    // padding:10,
    paddingHorizontal:10,
    paddingVertical: 10,
    // margin:"2%",
    marginHorizontal:10,
    marginVertical:10,
    borderWidth:2,
    borderColor:"purple",
    borderStyle:"solid",
    borderRadius: 5,
    backgroundColor:"pink"
  },
  lightbluebg: {backgroundColor:"lightblue"},
  lightgreenbg: {backgroundColor:"lightgreen"},
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  }
});
