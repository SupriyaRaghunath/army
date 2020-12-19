import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, SafeAreaView, TextInput, View } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'

class Row extends Component {
    render() {
        let { text, icon, placeholder, titleContainerStyle, inputContainerStyle, iconColor, placeholderTextColor } = this.props

        return (
            <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 1, marginVertical: 5, padding: 10, width: 300, backgroundColor: '#DCDCDC' }} >
                <Icon name={icon} size={20} color="#900" style={{ marginRight: 10, justifyContent: 'center', paddingVertical: 10 }} />
                <View style={{ width: '80%' }}>
                    <Text style={[titleContainerStyle, { marginBottom: 5 }]}>{text}</Text>
                    <TextInput
                        placeholder={placeholder}
                        style={[inputContainerStyle, { marginTop: 5, width: '100%' }]}
                        maxLength={10}
                        onChange={({ name, type, text }) => this.props.inputOnChange({ name, type, text })}
                    />
                </View>
            </View>
        )
    }
}

export { Row }