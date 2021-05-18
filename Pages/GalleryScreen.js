import React, {useState} from 'react';
import { StyleSheet,
        View,
        Text} from 'react-native';

import TopBar from "../Components/TopBar"               

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
                    <Text style={styles.galleryText}>Recieved Images</Text>
                  </View>
                }

                {menuSelection == 1 && 
                  <View>
                    <Text style={styles.galleryText}>Images Sent</Text>
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
          paddingTop: 80,
          paddingBottom: 4,
        },
        baseTitle: {
          fontSize: 32,
          fontFamily: 'SpaceMono_700Bold',
          color: '#1f1f1f'
        },
        galleryText: {
          marginTop: 30,
          paddingHorizontal: 30,
          paddingBottom: 4,
          fontFamily: 'SpaceMono_700Bold',
          fontSize: 16,
          color: '#1f1f1f'
        },
    
       
      });
      
      export default GalleryScreen;