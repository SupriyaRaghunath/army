import React, { Component } from 'react'
import { View, SectionList, StyleSheet, Text, SafeAreaView } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { NewsAPI } from 'newsapi'

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b662f939e57442c2ac061e8ebd5eac2a'

class Home extends Component {
  constructor(props) {
    super(props)
    state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(url, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        let sections = [{ data: data.articles }]

        this.setState({ data: sections })
      })
      .catch(err => {
        console.log(err);
      });
  }

  _viewMore({ item }) {
    this.props.navigation.push('Details', { props: item })
  }

  _renderItem(item) {
    return (
      <Card>
        <Card.Content>
          <Title>{item.item.title}</Title>
          <Paragraph>{item.item.description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.item.urlToImage }} />
        <Card.Actions>
          <Button onPress={() => { this._viewMore({ item }) }}>View More</Button>
        </Card.Actions>
      </Card>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <SectionList
          sections={this.state?.data}
          keyExtractor={(item, index) => item + index}
          renderItem={item => this._renderItem(item)}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});


export { Home }