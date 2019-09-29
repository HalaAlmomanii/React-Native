import React , { Fragment }from 'react';
import { StyleSheet, Text, View,TextInput,Button ,label} from 'react-native';


class Page2 extends  React.Component {
  state = { }

  word=(e)=>{
    this.setState({Word:e.target.value})
   }
  render(){
   
  return (
    <Fragment>
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Phone</Text>
      <TextInput style={styles.input}></TextInput>
  
      <Button onPress={() => this.props.navigation.navigate('Page1')} title="Retun to Booking page"/>
    </View>
    
    </Fragment>
  );
}
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    Color:"gray",
    borderWidth:20,
    height:20
  }
});
export default Page2;