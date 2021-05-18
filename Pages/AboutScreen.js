import React, {useState} from 'react';
import { StyleSheet,
        View,
        Text,
        ScrollView} from 'react-native';

import TopBar from "../Components/TopBar"        

const AboutScreen = (props) => {

  const [menuSelection, setMenuSelection] = useState(0);
  const onPressHeader = (index) => {
    setMenuSelection(index);
  }

    return (
        <View style={styles.container}>

        <View>
          <View style={styles.baseText}>
            <Text style={styles.baseTitle}>info.</Text>
            <TopBar labels={["Guide","About"]} onPressHeader={onPressHeader} menuSelection={menuSelection}/>
          </View>  


          {menuSelection == 0 && 
          <ScrollView>
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

              {"\n"}
              {"\n"}
              {"\n"}

              <Text style={styles.infoTitle}>Step 3</Text>
              {"\n"}
              <Text style={styles.infoContent}>This sentence will be a description of the third step.
              {"\n"}
              <Text style={{ opacity: 0.5 }}>Nulla sit amet nisi dictum, consectetur metus eget, luctus ex. Ut at augue vel nulla convallis finibus. Donec facilisis posuere est. Duis rhoncus est eu nulla blandit tempus.</Text>
              </Text>

            </Text>
          </ScrollView>
          }

          {menuSelection == 1 && 
          <ScrollView>
            <Text style={styles.infoText}>
              <Text style={styles.infoTitle}>The Project</Text>
              {"\n"}
              <Text style={styles.infoContent}>The project focuses on creating a language that enables interaction between at least two individuals, using cryptology as a tool to translate words into forms.</Text>

              {"\n"}
              {"\n"}
              {"\n"}

              <Text style={styles.infoTitle}>The Authors</Text>
              {"\n"}
              <Text style={styles.infoContent}>
                Alexandre pinho
                {"\n"}
                Carlota Silva
                {"\n"}
                Diogo Ribeiro
              </Text>

            </Text>


              
            
          </ScrollView>
          }




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
  infoText: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 4,
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
},
 
});

export default AboutScreen;