import {View,Text,Pressable,StyleSheet} from 'react-native';


function PrimaryButton({children}){
    function pressHandeler(){
        console.log("Pressed")
    }
    return(
        <View style={styles.outerContainer} >
            <Pressable 

             style={({pressed}) =>
                pressed
                ?[styles.container,styles.pressed]
                :styles.container}
             onPress={pressHandeler} 
             android_ripple={{color:'#e40'}}>
                <Text style={styles.buttonText} >
                    {children}
                </Text>
            </Pressable>
        </View>
      

    )
}

export default PrimaryButton;
const styles= StyleSheet.create({
    outerContainer:{
        borderRadius:28,
        overflow:'hidden'
    },
    container:{
        backgroundColor:'#e402',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        margin:2,
        
    },
    buttonText:{
        color:'white',
        textAlign:'center',

    },
    pressed:{
        //opacity is for when ythe button tap in ios
        opacity:0.75,
    }
})