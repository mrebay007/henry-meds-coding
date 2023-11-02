import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    btn: {
      backgroundColor: "#00836c",
      height: 52,
      width: 256,
      borderRadius: 24,
    },
    btnText: {
      flex: 1,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 52,
      textAlign: 'center',
    },
    btnSecondary: {
      backgroundColor: '#white',
      borderColor: '#00836c',
      borderWidth: 2,
      height: 52,
      width: 256,
      borderRadius: 24,
    },
    btnTextSecondary: {
      flex: 1,
      color: '#00836c',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 52,
      textAlign: 'center',
    },
    headerText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 52,
      textAlign: 'center',
    },
    labelText: {
      color: '#00836c',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'left',
    },  
    infoText: {
        color: '#CCC',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 8,
      },
    box: {
      height: 96,
      width: 96,
      backgroundColor: '#EEE',
      margin: 6,
      borderRadius: 4,
      padding: 8,
    },
    container: {
      display: 'flex',
      width: '100%',
      marginVertical: 2,
    },
    section: {
      flexDirection: 'column',
    },
  });