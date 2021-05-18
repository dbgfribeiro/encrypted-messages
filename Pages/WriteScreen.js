
import React, {useState} from 'react';
import { StyleSheet,
        View,
        Text,
        TextInput
      } from 'react-native'; 

const WriteScreen = (props) => {

  const [text, onChangeText] = React.useState(null);

    return (
      <View style={styles.container}>

        <View style={styles.baseText}>
          <Text style={styles.baseTitle}>write.</Text>
        </View>
        
        <View style={styles.newMessage}>
          <Text style={styles.saudation}>hi, Diogo</Text>
          <Text style={styles.saudationNext}>What's up?</Text>
          
          <TextInput
            style={styles.messageInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="your message"
          />
        </View>

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
    paddingTop: 80,
    paddingBottom: 4,
  },
  baseTitle: {
    fontSize: 32,
    fontFamily: 'SpaceMono_700Bold',
    color: '#1f1f1f'
  },

  writeText: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 4,
    fontFamily: 'SpaceMono_700Bold',
    fontSize: 16,
    color: '#1f1f1f'
  },

  newMessage:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop:-150
  },
  saudation:{
    fontFamily: 'SpaceMono_700Bold',
    fontSize: 24,
    color: '#1f1f1f'
  },
  saudationNext:{
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 18,
    color: '#1f1f1f'
  },
  messageInput: {
    height: 40,
    fontFamily: 'SpaceMono_400Regular',
    borderBottomWidth: 2,
  },
});

export default WriteScreen;