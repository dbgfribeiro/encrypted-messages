import React, {useState} from 'react';
import { StyleSheet,
        View,
        Text,
        Image,
        FlatList} from 'react-native';

import ImageModal from 'react-native-image-modal';
import TopBar from "../Components/TopBar"    
import {recievedMessages} from '../Data/Messages';   
import {sentMessages} from '../Data/Messages';  

const numCols = 2;

const renderSentMessages = ({item, index}) => {
  let {messagesItem,messagesImage,messagesText} = styles
  return(
    <View style={messagesItem}>
      <Image style={messagesImage} source={item.ref}/>
      <Text style={messagesText}>{item.title}</Text>
    </View>
  )
}

const renderRecievedMessages = ({item, index}) => {
  let {messagesItem,messagesImage,messagesText} = styles
  return(
    <View style={messagesItem}>
      <Image style={messagesImage} source={item.ref}/>
      <Text style={messagesText}>{item.title}</Text>
    </View>
  )
}

        const GalleryScreen = (props) => {

          const [menuSelection, setMenuSelection] = useState(0);
          const onPressHeader = (index) => {
            setMenuSelection(index);
          }

          return (
              <View style={styles.container}>
      
                <View style={styles.baseText}>
                  <Text style={styles.baseTitle}>gallery.</Text>
                  <TopBar labels={["Recieved","Sent"]} onPressHeader={onPressHeader} menuSelection={menuSelection}/>
                </View>

                {menuSelection == 0 && 
                  <View>
                  <FlatList
                      data={recievedMessages}
                      renderItem={renderRecievedMessages}
                      keyExtractor={(item,index) => index.toString()}
                      numColumns={numCols}
                      style={styles.galleryContainer}
                    />
                  </View>
                }

                {menuSelection == 1 && 
                  <View>
                    <FlatList
                      data={sentMessages}
                      renderItem={renderSentMessages}
                      keyExtractor={(item,index) => index.toString()}
                      numColumns={numCols}
                      style={styles.galleryContainer}
                    />
                  </View>
                }
              </View>
          )
      }
      
      const styles = StyleSheet.create({
        container:{
          backgroundColor: '#EDEDED',
          flex: 1
        },
        baseText:{
          paddingHorizontal: 30,
          paddingTop: 60,
          paddingBottom: 4,
        },
        baseTitle: {
          fontSize: 32,
          fontFamily: 'SpaceMono_700Bold',
          color: '#1f1f1f'
        },
        galleryContainer:{
          paddingHorizontal: 20,
          height:'100%',
          marginTop:10
        },
        messagesItem:{
          margin:10,
          width: 165,
        },
        messagesImage:{
          width: '100%',
          height: undefined,
          aspectRatio: 1,
          borderRadius:5,
          backgroundColor:'rgba(237,237,237,0.15)'
        },
        messagesText:{
          textAlign:'left',
          marginTop: 10,
          fontFamily: 'SpaceMono_700Bold',
        }
       
      });
      
      export default GalleryScreen;