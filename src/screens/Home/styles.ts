import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#0D0D0D",
      padding: 24,
    },
    eventName: {
      color:'#FFF',
      fontSize:24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color:'#6B6B6B',
      fontSize: 16,
    },
    input: {
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12,
        height: 54,
    },
    button: {
      width:52,
      height: 52,
      borderRadius: 6,
      backgroundColor: "#1E6F9F",
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: "#FFF",
      fontSize: 24
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },
    listEmptyText:{
      color: "#808080",
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    listEmptySubText:{
      color: "#808080",
      fontSize: 14,
      textAlign: 'center'
    },
    imgLogo:{
      width: 110.34,
      height: 32,
    },
    ImgContainer:{
      marginTop: 70,
      alignItems: 'center',
      justifyContent: 'center'
    },
    ImgContainerWithNoTask:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    imgLogoWithNoTask:{
      height: 56,
      width: 56,
      marginBottom: 20
    },
    infoContainer:{
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    infoText:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    },
    InfoTextContainer:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    counterContainer:{
      backgroundColor: '#333333',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 6,
      marginLeft: 10
    },
    counter:{
      color: '#FFF'

    }

  });