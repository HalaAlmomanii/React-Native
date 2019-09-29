import React , { Fragment }from 'react';
import { StyleSheet, Text, View,TextInput,Button, FlatList,Picker} from 'react-native';
import axios from 'axios';
class Page3 extends  React.Component {
  state ={backdata:[],time:"hi"}





  render(){
   


  return (
    <Fragment>
    <View >
      {console.log("page3",this.props.el)}
      
      <Text>{this.props.el}</Text>
      <Button onPress={this.props.book.bind(this,this.props.el,this.props.table)} title="book"/>
    
    </View>
  
    </Fragment>
  );

}
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default Page3;