import { StyleSheet } from 'react-native';
import colorPath from '../../constants/colorPath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
       margin:24,
       alignItems:'center'
    },
    txtStyle:{
        color:colorPath.white
    },
    cart: {
        flexDirection: "column",
        width: moderateScale(350),
        height: moderateScaleVertical(68),
        backgroundColor:colorPath.teal,
       justifyContent:"space-evenly",
        paddingHorizontal: 14,
        borderRadius: 4,
    
    },
});
export default styles