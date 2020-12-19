import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, SafeAreaView } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const url = 'https://newsapi.org/v2/everything?q=indian%20army&apiKey=8af8e316119e4b78a8ea2660321d43'
const DATA = {
  "status": "ok",
  "totalResults": 5005,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "Visual.ly"
      },
      "author": "authorsebooks",
      "title": "The Blockchain’s Bitcoin",
      "description": "Some examples of alternative currencies are the Brixton pound (B£) and blockchain’s bitcoin. Today, you can exchange the Brixton pound one for one",
      "url": "https://visual.ly/community/Infographics/economy/blockchain%E2%80%99s-bitcoin",
      "urlToImage": "https://thumbnails-visually.netdna-ssl.com/the-blockchains-bitcoin_5fdddb6767f8a_w250_h250.jpg",
      "publishedAt": "2020-12-19T10:52:18Z",
      "content": "Cecil (CJ) John 01 01 1 11 THE SOCIAL 10 1 0 CURRENCY 1 BLOCK CHAN 0001 01 01 1 0 E*. WHY WE OUGHT TO RETHINK MONEY THE INTERSECTN OF BARTENG, CROCRENCY ARMANONG 00 00 0 0 10 1 01 01 Examples of alte… [+99 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (Sean Williams)",
      "title": "The 3 Robinhood Stocks I'm Most Excited About",
      "description": "These high-growth, innovative companies offer abundant upside to patient investors.",
      "url": "https://www.fool.com/investing/2020/12/19/the-3-robinhood-stocks-im-most-excited-about/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/605092/curious-man-reading-financial-newspaper-getty.jpg",
      "publishedAt": "2020-12-19T10:51:00Z",
      "content": "The benchmark S&amp;P 500 is on track to end the year notably higher, but that doesn't mean it's been a smooth ride. Since the end of February, we've seen the fastest bear market slide on record, as … [+6375 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AdAge.com"
      },
      "author": "Garett Sloane",
      "title": "Big whoops: 6 most notable brand blunders of 2020",
      "description": "Netflix, Facebook, Twitter, Zoom, Sony and Gap earn a spot among this year's noteworthy stumbles.",
      "url": "https://adage.com/article/year-review/big-whoops-6-most-notable-brand-blunders-2020/2299036",
      "urlToImage": "https://s3-prod.adage.com/s3fs-public/styles/800x600/public/EndofYear_BrandWhoops_cuties_3x2.jpg",
      "publishedAt": "2020-12-19T10:30:00Z",
      "content": "Netflix marketed a movie that seemed to glorify preteen twerking, and Twitter was compromised by hackers. Facebook faced a boycott and Sony couldnt keep up with demand for its new gaming console.\r\nIt… [+5000 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Monevator.com"
      },
      "author": "The Investor",
      "title": "Weekend reading: Christmas crackers",
      "description": "A reminder to read your financial origin stories, plus the last great reads of 2020…",
      "url": "https://monevator.com/weekend-reading-christmas-crackers-2/",
      "urlToImage": null,
      "publishedAt": "2020-12-19T10:10:52Z",
      "content": "What caught my eye this week.\r\nI have a stuffed hamper’s worth of links below to help get you through the Christmas break. However I struggled with how to introduce what’s probably our last post of t… [+7634 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "newsBTC"
      },
      "author": "Guest Author",
      "title": "New to Crypto? Get Your Christmas Treats at Crypto.com",
      "description": "The Cryptocurrency community is all set to have A Very Crypto.com Christmas  The flagship cryptocurrency, Bitcoin is at its all-time high which further reinforces cryptocurrency’s position as a strong investment instrument. While those hodling Bitcoin witness…",
      "url": "https://www.newsbtc.com/sponsored/new-to-crypto-get-your-christmas-treats-at-crypto-com/",
      "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/12/christmas-decorations-1150015_1920-1.jpg",
      "publishedAt": "2020-12-19T09:52:15Z",
      "content": "The Cryptocurrency community is all set to have A Very Crypto.com Christmas\r\n The flagship cryptocurrency, Bitcoin is at its all-time high which further reinforces cryptocurrency’s position as a stro… [+3040 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "oliviasantres",
      "title": "Bitcoin in a Nutshell,Buy Sell Perfect Money in India | ergoApps",
      "description": "p style margin 0 Bitcoin has nearly become a commonly recognized name with regularly expanding inclusion in the media, and reas",
      "url": "https://slashdot.org/submission/12941090/bitcoin-in-a-nutshellbuy-sell-perfect-money-in-india--ergoapps",
      "urlToImage": null,
      "publishedAt": "2020-12-19T09:33:20Z",
      "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
      "source": {
        "id": "rt",
        "name": "RT"
      },
      "author": "RT",
      "title": "Bitcoin should be worth $400,000 based on its scarcity – Guggenheim CIO",
      "description": "The world’s most popular cryptocurrency, bitcoin, should be worth about 20 times more than it is now, based on its scarcity and value relative to gold, according to Guggenheim’s global chief investment officer (CIO) Scott Minerd. Read Full Article at RT.com",
      "url": "https://www.rt.com/business/509985-bitcoin-price-guggenheim-projection/",
      "urlToImage": "https://cdni.rt.com/files/2020.12/article/5fdc6fb220302705896d922f.jpg",
      "publishedAt": "2020-12-19T09:21:17Z",
      "content": "Minerd told Bloomberg that the supply of bitcoin is limited to 21 million coins, giving it its anti-inflationary trademark. He said that the token’s scarcity, together with the Federal Reserve’s \"ram… [+1251 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "FXStreet"
      },
      "author": "Eren Sengezer",
      "title": "US Treasury’s rule on governing self-hosted cryptocurrency wallets is quite concerning, says senator-elect Cynthia Lummis",
      "description": "In an announcement on Friday, the US Department of Treasury's Financial Crimes Enforcement Network proposed a new rule that would allow it to monitor",
      "url": "https://www.fxstreet.com/cryptocurrencies/news/us-treasurys-rule-on-governing-self-hosted-cryptocurrency-wallets-is-quite-concerning-says-senator-elect-cynthia-lummis-202012190909",
      "urlToImage": "https://editorial.fxstreet.com/images/Markets/Currencies/Cryptocurrencies/cryptos_chart_Large.jpg",
      "publishedAt": "2020-12-19T09:09:35Z",
      "content": "<ul><li>US Treasury shifts focus to unhosted wallets in fight against money laundering.</li><li>Outspoken Bitcoin advocate Senator Lummis expresses concerns over lack of transperancy.  </li></ul>In a… [+2035 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cointelegraph"
      },
      "author": "Cointelegraph By Joseph Young",
      "title": "Did Bitcoin price just see a 'retail FOMO peak signal'? This indicator says yes",
      "description": "The Binance Futures funding rate overtook Deribit on Dec. 18, which has historically led to Bitcoin to consolidate or pull back.",
      "url": "https://cointelegraph.com/news/did-bitcoin-price-just-see-a-retail-fomo-peak-signal-this-indicator-says-yes",
      "urlToImage": "https://s3.cointelegraph.com/uploads/2020-12/6c8a8f71-092e-47d8-9b4e-cdae4b5a4fbd.jpg",
      "publishedAt": "2020-12-19T09:07:12Z",
      "content": "The Bitcoin (BTC) futures funding rate on Binance Futures overtook Deribit on Dec.18, according to data from CryptoQuant. Historically, when this happened, the dominant cryptocurrency saw a local top… [+3167 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cointelegraph"
      },
      "author": "Cointelegraph By Maxim Rukinov",
      "title": "Opportunities for blockchain in police investigations",
      "description": "How distributed ledger technologies can help law enforcement agencies to fight crime and money laundering.",
      "url": "https://cointelegraph.com/news/opportunities-for-blockchain-in-police-investigations",
      "urlToImage": "https://s3.cointelegraph.com/uploads/2020-12/b6b61777-f867-445a-af3d-bd39b5baf5d8.jpg",
      "publishedAt": "2020-12-19T08:09:21Z",
      "content": "The problem of spreading cybercrime is becoming more acute today, and developed countries with high gross domestic product rates suffer from it to a much greater extent than developing countries. Thi… [+7135 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "newsBTC"
      },
      "author": "Guest Author",
      "title": "Heal Thyself with Leela Quantum Tech’s ‘Plan B’ Bitcoin Edition Quantum T-Shirt",
      "description": "Leela Quantum Tech (LQT), a company working on improving the health and wellness of the population by using advanced technologies to create easy-to-use products has launched a special Bitcoin edition of the world’s first Quantum T-Shirt. Aptly called the Plan…",
      "url": "https://www.newsbtc.com/sponsored/heal-thyself-with-leela-quantum-techs-plan-b-bitcoin-edition-quantum-t-shirt/",
      "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/12/LeelaQuantumTech.png",
      "publishedAt": "2020-12-19T07:40:08Z",
      "content": "Leela Quantum Tech (LQT), a company working on improving the health and wellness of the population by using advanced technologies to create easy-to-use products has launched a special Bitcoin edition… [+3136 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (Eric Volkman)",
      "title": "Goldman Sachs Reportedly Picked to Lead Coinbase IPO",
      "description": "This strongly suggests the cryptocurrency market operator is leaning toward a traditional issue rather than a direct sale.",
      "url": "https://www.fool.com/investing/2020/12/19/goldman-sachs-reportedly-picked-to-lead-coinbase-i/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/605583/ipo-in-blocks.jpg",
      "publishedAt": "2020-12-19T06:23:18Z",
      "content": "Well, that was fast.\r\nOne day after cryptocurrency market operator Coinbase announced that it confidentially filed the regulatory paperwork with the Securities and Exchange Commission (SEC) for an in… [+1496 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New Zealand Herald"
      },
      "author": "newsfeeds@nzherald.co.nz",
      "title": "Russian 'computer genius' Alexander Vinnik convicted of money laundering in France, has $140m in bank funds frozen in New Zealand",
      "description": "A Russian \"computer genius\" with $140 million in frozen bank funds in New Zealand has been convicted of money laundering in France.Alexander Vinnik was arrested while on holiday in Greece in 2017 and extradited to France this year,...",
      "url": "https://www.nzherald.co.nz/nz/russian-computer-genius-alexander-vinnik-convicted-of-money-laundering-in-france-has-140m-in-bank-funds-frozen-in-new-zealand/3THIPPD4FIMSPCVPDOAQ4UIF5I/",
      "urlToImage": "https://www.nzherald.co.nz/resizer/eFpGDKGDRbkCGn7AGNwJbHkCqZE=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/ZSUDSK7IUC2ROIHZPHH4TLG7CY.jpg",
      "publishedAt": "2020-12-19T06:06:13Z",
      "content": "Russian citizen Alexander Vinnik has been found guilty of money laundering through the BTC-e cryptocurrency exchange and now faces extradition to the United States. Photo / Getty ImagesArrested while… [+7039 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Jimeet Modi",
      "title": "Market buoyancy to continue, but 2020 may end with profit booking",
      "description": "All these factors indicate that the bull run in the market is here to stay, albeit there will be bouts of profit booking and numerous speed-breakers before the New Year starts.",
      "url": "https://economictimes.indiatimes.com/markets/stocks/news/market-buoyancy-to-continue-but-2020-may-end-with-profit-booking/articleshow/79809286.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-79809275,width-1070,height-580,imgsize-273990,overlay-etmarkets/photo.jpg",
      "publishedAt": "2020-12-19T05:26:07Z",
      "content": "The week gone by was indeed a sunny one, with the benchmark indices touching lifetime highs and making investors wonder if this frenzy is justified. All heads turned towards Burger Kings IPO and its … [+3895 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Seeking Alpha"
      },
      "author": "Real Vision",
      "title": "2020 Market Wrap Up: Raoul Pal",
      "description": "Tesla’s historic entry into the S&P is part of the larger insolvency narrative where those who can access capital have done well and those who can’t have suffered.",
      "url": "https://seekingalpha.com/article/4395441-2020-market-wrap-up-raoul-pal",
      "urlToImage": "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
      "publishedAt": "2020-12-19T05:19:54Z",
      "content": "Real Vision CEO Raoul Pal looked back at the year that was on todays Real Vision Daily Briefing, sharing his thoughts on everything from equities to the bond market to crypto and more.\r\nHe touched on… [+4079 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sensorstechforum.com"
      },
      "author": "Ventsislav Krastev",
      "title": "Omfl Virus File",
      "description": "What Is Omfl Virus? This elimination guide has been developed with the key goal to assist people infected by Omfl virus to understand more info concerning this nasty malware. At the end of the article, every one of you that were unfortunate to become infected…",
      "url": "https://sensorstechforum.com/omfl-virus-remove/",
      "urlToImage": "https://sensorstechforum.com/wp-content/uploads/2020/11/Remove-Omfl-Virus-and-Restore-Files-300x169.jpg",
      "publishedAt": "2020-12-19T04:44:00Z",
      "content": "What Is Omfl Virus?\r\nThis elimination guide has been developed with the key goal to assist people infected by Omfl virus to understand more info concerning this nasty malware. At the end of the artic… [+19586 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Seeking Alpha"
      },
      "author": "Fear & Greed Trader",
      "title": "S&P 500 Weekly Update: Across-The-Board Highs - Don't Try To Outthink This Bull Market",
      "description": "Housing continues its powerful recovery, while many still talk of a double-dip recession ahead. Global economic data continues to suggest the slow rebound remains on track despite more lockdowns.",
      "url": "https://seekingalpha.com/article/4395437-s-and-p-500-weekly-update-across-board-highs-dont-try-to-outthink-this-bull-market",
      "urlToImage": "https://static.seekingalpha.com/uploads/2020/12/17/saupload_YhzDg0rO7ckPpS149Ys7n8B5O__MkCaSV2OwpdwyEFels889oAgnbJFGvomM2G_x_NW6x78ApvLQXn5z1dG4VJzhquRL5IYMPl8FOkQz_n2Wln0bl4dg2iAj1y-tgGVAFM6o8HfE.jpeg",
      "publishedAt": "2020-12-19T04:42:21Z",
      "content": "\"What the wise do in the beginning, fools do in the end.\" - Warren Buffett\r\nIf you were wondering how many times the market can rally on the same news, the answer is there really isn't any sort of qu… [+34118 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Kevin Mendonsa",
      "title": "Kidnapping for bitcoin: K'taka cops rescue minor",
      "description": "Four police teams of Dakshina Kannada district police had launched a massive search for an eight-year-old boy reportedly kidnapped from Ujire in Belthangady taluk on Thursday evening and rescued him near Malur in Kolar around 5am on Saturday. Police have also…",
      "url": "https://timesofindia.indiatimes.com/city/mangaluru/kidnapping-for-rs-10-crore-bitcoin-ransom-police-rescue-minor-in-kolar-six-arrested/articleshow/79808748.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-79808747,width-1070,height-580,imgsize-135478,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2020-12-19T04:12:35Z",
      "content": "Kidnapping for bitcoin ransom: Police rescue minor in Kolar, six arrested"
    },
    {
      "source": {
        "id": null,
        "name": "The Boston Globe"
      },
      "author": "Zolan Kanno-Youngs",
      "title": "Homeland Security’s latest target: Vaccine scams",
      "description": "A team of agents from the Department of Homeland Security was combing thousands of websites scouting for evidence of the next phase of fraud schemes: offers of treatments or vaccines for the coronavirus.",
      "url": "https://www.bostonglobe.com/2020/12/18/nation/homeland-securitys-latest-target-vaccine-scams/",
      "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/s6lDQBDD8cYC9tj0DPlWaYVOgtQ=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/LJGUG3734LZGNMVV77YDE7UX7A.jpg",
      "publishedAt": "2020-12-19T03:13:25Z",
      "content": "Given the intense global demand for protection from COVID-19, it is perhaps not surprising that law enforcement authorities are already uncovering fake sites looking to cash in on the desperate searc… [+6772 chars]"
    }]
}

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
        data = DATA
        let sections = [{ data: data.articles }]
        this.setState({ data: sections })
        console.log(this.state)

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
