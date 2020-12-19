import React, { Component } from 'react'
import { View, SectionList, StyleSheet, Text, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview';


class Details extends Component {
    render() {
        let { props } = this.props.route.params

        return (
            <WebView source={{ uri: props.item.url }} />
        )
    }
}

export { Details }