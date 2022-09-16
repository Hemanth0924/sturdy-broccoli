import * as React from 'react';
import{Text,View, TouchableOpacity,StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
    playSound = async () => {
        await Audio.Sound.createAsync(
            { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
             {shouldPlay: true}
        );

    }

    render() {
return(
    <TouchableOpacity 
    style = {styles.button}
    onPress = {this.playSound}>

        <Text
        style = {styles.buttonText}>   PressMe   </Text> 
    </TouchableOpacity>

);

    }
 
}

const styles = StyleSheet.create({
    
    button:{
Marg
    }
})
