import React from 'react';
import { StyleSheet,
        View,
        Text, } from 'react-native';

const AboutScreen = (props) => {
    return (
        <View style={styles.container}>

          <View style={styles.baseText}>
            <Text style={styles.baseTitle}>info.</Text>

            <Text style={styles.infoText}>

              <Text style={styles.infoTitle}>Step 1</Text>
              {"\n"}
              <Text style={styles.infoContent}>This sentence will be a description of the first step.
                {"\n"}
                <Text style={{ opacity: 0.5 }}>Quisque at odio ac tortor fermentum viverra. Donec egestas massa pellentesque diam vehicula, vel mattis tellus dictum. Pellentesque nisl nulla, gravida sed dolor ac, tincidunt suscipit ante.</Text>
              </Text>

              {"\n"}
              {"\n"}
              {"\n"}

              <Text style={styles.infoTitle}>Step 2</Text>
              {"\n"}
              <Text style={styles.infoContent}>This sentence will be a description of the second step.
                {"\n"}
                <Text style={{ opacity: 0.5 }}>Nulla sit amet nisi dictum, consectetur metus eget, luctus ex. Ut at augue vel nulla convallis finibus. Donec facilisis posuere est. Duis rhoncus est eu nulla blandit tempus.</Text>
              </Text>


            </Text>

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
    paddingVertical: 80,
  },
  baseTitle: {
     fontSize: 32,
     fontFamily: 'SpaceMono_700Bold',
     color: '#1f1f1f'
  },


  infoText: {
    marginTop: 40
  },
  infoTitle: {
    fontFamily: 'SpaceMono_700Bold',
    fontSize: 18,
    color: '#1f1f1f'
 },
 infoContent: {
    fontFamily: 'SpaceMono_400Regular',
    fontSize: 16,
    color: '#1f1f1f'
}
 
});

export default AboutScreen;