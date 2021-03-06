import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,KeyboardAvoidingView,TextInput,ScrollView,Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';


export default class SettingScreen extends Component{
constructor(){
    super();
    this.state={
        firstName:'',
        lastName:'',
        address:'',
        contact:'',
     }}

     getData=()=>{
        var email =firebase.auth().currentUser.email;
        db.collection('Users')
        .where('email_id','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    firstName:data.first_name,
                    lastName:data.last_name,
                    address:data.address,
                    contact:data.contact,
                    }) }) })
}
 
updateData=()=>{
    db.collection('Users').doc
    .update({
        "first_name":this.state.firstName,
        "last_name":this.state.lastName,
        "address":this.state.address,
        "contact":this.state.contact,
        
    })
alert("Profile Updated Successfully")
}


componentDidMount(){
    this.getUserDetails()
  }



    render(){
    return(
        <View  style={styles.container} >
<MyHeader title="Settings" navigation={this.props.navigation} />
<View style={styles.formContainer} >
<TextInput 
 style={styles.formTextInput}
 placeholder={"First Name"}
 maxLength={8}
 onChangeText={(text)=>{
     this.setState({
         firstName:text
     })
 }}
 value={this.state.firstName}
/>

<TextInput 
 style={styles.formTextInput}
 placeholder={"Last Name"}
 maxLength={8}
 onChangeText={(text)=>{
     this.setState({
         lastName:text
     })
 }}
 value={this.state.lastName}
/>

<TextInput 
 style={styles.formTextInput}
 placeholder={"Address"}
 multiline={true}
 onChangeText={(text)=>{
     this.setState({
         address:text
     })
 }}
 value={this.state.address}
/>

<TextInput 
 style={styles.formTextInput}
 placeholder={"Contact"}
 maxLength={10}
 keyboardType={'numeric'}
 onChangeText={(text)=>{
     this.setState({
         contact:text
     })
 }}
 value={this.state.contact}
/>

<TouchableOpacity 
style={styles.button}
onPress={()=>{
    this.updateData()
}}
>

    <Text style={styles.buttonText} > Save </Text>
</TouchableOpacity>

</View>
        </View>
    )
}

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    formContainer:{
        flex:1,
        width:"100%",
        alignItems:"center",


    },
    formTextInput:{
        width:'75%',
        height:35,
alignSelf:'center',
borderColor:'#ffab91',
borderRadius:10,
borderWidth:1,
marginTop:20,
padding:10
    },
    button:{
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
         },
       shadowOpacity:0.44,
       shadowRadius:10.32,
       elevation:16,
       marginTop:20,

    },
    buttonText:{
        fontSize:25,
fontWeight:'bold',
color:'#fff'
    }
    
})

