import React, { Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Picker } from 'react-native';
import { ListItem, List } from 'react-native-elements'
import axios from 'axios';
import Page2 from './Page2'
import Page3 from './Page3'
class Page1 extends React.Component {
  state = { res: "", table: 1, Keys: [], backdata: [] }

  task = async () => {
    console.log("first", this.state.table)
    let x = []
    axios.get(`http://10.60.158.123:9000/newdata/${this.state.table}`)
      .then(res => {
        this.setState({ res: res.data })
        let arr = this.state.res

        arr.filter(element => {
          element.Time.filter(ele => {
            console.log("ele", ele)
            for (const key in ele) {
              if (ele[key] === true)
                x.push(key)
            }
          })


        })

      })
      .then(() =>
       {  
         
    
       let  z=x.filter((elem,index)=>{
         return  x.indexOf(elem)===index
        })
     
this.setState({ Keys: z})
console.log("booking",this.state.Keys)
    }

       
      )
  }
  book = (e, table) => {
    
    console.log("page3---booking", e, table)
    axios.get(`http://10.60.158.123:9000/book/${e}/${table}`)
      .then(() => {
        this.task()
      })
      .then(() => {
        alert("your table was scucussfully ")
        this.props.navigation.navigate('Page2');
      })


  }
  render() {

    return (
      <Fragment>
        <View style={styles.container}>

        <Button onPress={() => this.props.navigation.navigate('Page2')} title="Retun to Booking page"/>

          <Button onPress={this.task} title="the Appoiment" />
          <Picker
            style={styles.p}
            selectedValue={this.state.table}
            onValueChange={(itemValue, itemIndex) => this.setState({ table: itemValue })}>
            <Picker.Item label="1 Person" value="1" />
            <Picker.Item label="2 Persons" value="2" />
            <Picker.Item label="4 Persons " value="4" />
          </Picker>
          {this.state.Keys.map((elem, i) => < Page3 el={elem} i={i} key={i} table={this.state.table} book={this.book} />)}

        </View>

      </Fragment>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: { width: 150 }
});
export default Page1;    
