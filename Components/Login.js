import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, SafeAreaView, TextInput, View, ImageBackground } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Row } from '../UI/Row'
import { firebase } from '../src/firebase/config';

class Login extends Component {
    state = {
        userName: '',
        password: ''
    }

    componentDidMount() {
        // firebase
        //     .auth()
        //     .createUserWithEmailAndPassword('supriya.raghunath96@gmail.com', 'RaVaShruSu0417!')
        //     .then((response) => {
        //         const uid = response.user.uid
        //         const data = {
        //             id: uid,
        //             email,
        //             fullName,
        //         };
        //         const usersRef = firebase.firestore().collection('users')
        //         usersRef
        //             .doc(uid)
        //             .set(data)
        //             .then(() => {
        //                 navigation.navigate('Home', { user: data })
        //             })
        //             .catch((error) => {
        //                 alert(error)
        //             });
        //     })
        //     .catch((error) => {
        //         alert(error)
        //     });
    }
    render() {

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 10, borderWidth: 1, backgroundColor: '#C0C0C0' }}>
                <Row
                    {...this.props}
                    text={'Username'}
                    icon={'user'}
                    iconColor={'#900'}
                    placeholder={'Username'}
                    textContainerStyle={{ fontWeight: 'bold' }}
                    placeholderTextColor={"#003f5c"}
                    titleContainerStyle={{ fontWeight: 'bold' }}
                    inputContainerStyle={{ borderBottomWidth: 0.5 }}
                    inputOnChange={(text) => { this.state.userName = text }}
                />
                <Row
                    {...this.props}
                    text={'Password'}
                    icon={'lock'}
                    iconColor={'#900'}
                    placeholder={'Password'}
                    textContainerStyle={{ fontWeight: 'bold' }}
                    placeholderTextColor={"#003f5c"}
                    titleContainerStyle={{ fontWeight: 'bold' }}
                    inputContainerStyle={{ borderBottomWidth: 0.5 }}
                    inputOnChange={(text) => { this.state.password = text }}
                />
                <Button onPress={() => { debugger }}>Login</Button>
                <Button onPress={() => { debugger }}>Signup </Button>
            </View >)
    }
}
export { Login }