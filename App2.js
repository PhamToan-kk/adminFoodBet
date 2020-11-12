import React, {useEffect, useState} from 'react';
// Import core components
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import  ImagePicker from 'react-native-image-picker';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';

const App2 = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [single, setSingle] = useState('single');
  
  const uploadImage = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('User selected a file form camera or gallery', response); 
        const data = new FormData();
        data.append('name', 'photo');
        data.append('photo', {
        uri : response.uri,
        type: response.type,
        name: response.fileName
        })
        // const config = {
        //     method: 'POST',
        //     headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'multipart/form-data',
        //     },
        //     body: data,
        //     };
        //     fetch("http://localhost:3000/" + "uploaddemo", config)
        //     .then((res)=>{       
        //     console.log('aaa',res.json());
        //     }).catch((err)=>{console.log(err)})

      }
    });
  };

  return (
    <View style={styles.mainBody}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});

export default App2;
