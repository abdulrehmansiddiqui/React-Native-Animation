import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import HomeScreen from './src/HomeScreen';

const mydata = [
  {
    id: 1,
    text: 'card 1',
    uri: 'https://3.bp.blogspot.com/-K3m3fdY5N9k/W_-Q1jipPnI/AAAAAAAAAiU/had8QszS9Rc9Ro_CbNRFlTw6YaVQRhvJQCHMYCw/s1600/redhead-girl-long-hair-computer-wallpaper-61279-1680x1050px.jpg',
  },
  { id: 2, text: 'card 2', uri: 'https://3.bp.blogspot.com/-pa8hjs_I0Zo/W_-Q1LwWSrI/AAAAAAAAAiQ/lDfSxDo9-VkSTUK8c_nT9XFKCVpOjpETACHMYCw/s1600/girl-long-hair-wallpapers-mega-wallpapers.jpg' },
  {
    id: 3,
    text: 'card 3',
    uri: 'https://3.bp.blogspot.com/-UR1rhp-vKuE/W_-Q2HSesyI/AAAAAAAAAic/QjD0plmHt60VZKxo3hINy5gHbBe3FKF9gCHMYCw/s1600/6-problems-faced-by-girls-with-long-hair.jpg',
  },
  { id: 4, text: 'card 4', uri: 'https://cdn2.stylecraze.com/wp-content/uploads/2013/05/1182-20-Awesome-Hairstyles-For-Girls-With-Long-Hair-ss.jpg.webp' },
  { id: 5, text: 'card 5', uri: 'https://3.bp.blogspot.com/-UR1rhp-vKuE/W_-Q2HSesyI/AAAAAAAAAic/QjD0plmHt60VZKxo3hINy5gHbBe3FKF9gCHMYCw/s1600/6-problems-faced-by-girls-with-long-hair.jpg' },
  { id: 6, text: 'card 6', uri: 'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Beauty-girl-smiling-best-wallpaper-picture-PIC-WPD0011820.jpg' },
];
class App extends React.Component{  
  renderCard(item){
    return(
      <View style={{margin:10}} key={item.id}>
      <Card>
        <Card.Title title={item.text}/>
        <Image source={{ uri: item.uri}} style={{height:300}}/>
        <Card.Actions>
          <Button>like</Button>
          <Button>unlike</Button>
        </Card.Actions>
      </Card>
      </View>
    )
  }
  renderNoMoreCards(){
    return(
    <View style={{margin:10}}>
      <Card>
        <Card.Title title="No more Girls For You"/>
      </Card>
     </View>  
    )
    
  }
   render(){
        return (
        <View style={styles.container}>
         <HomeScreen
            data={mydata}
            renderCards={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
          />
        </View>
      ); 
   }
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

