import {TextInput,View,StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton'
function StartGameScreen(){
    return(
        <View style={styles.inpuContainer}>
            <TextInput 
            style={styles.input}
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}
            />
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
                
           
        </View>
    )
}
export default StartGameScreen

const styles = StyleSheet.create({
    inpuContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginHorizontal:24,
        borderRadius:8,
        marginTop:100,
        backgroundColor:'#4e0',
        //elevation on android only for giving shadow 
        elevation:20,
        //to have shadow on ios we take below approach 
        shadowColor:'black',
        shadowOffset:{width:0,height:20},
        shadowRadius:6,
        shadowOpacity:1

    },
    input:{
        height:50,
        width:60,
        fontSize:32,
        borderTopColor:'#77557f',
        borderTopWidth:2,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:'row'
    }
});
