import { StyleSheet, Text, View } from "react-native"
import Animated from "react-native-reanimated"
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({title, animatedStyles}) => {
    
    return(
        <Animated.View style={[styles.container, animatedStyles]}>
            <View style={styles.sideContainer}>
                <Material name={'arrow-left'} size={28} color={'#fff'}/>
            </View>
            <View style={styles.middleContainer}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>{title}</Text>
            </View>
            <View style={styles.sideContainer}>
                <Material name={'dots-vertical'} size={20} color={'#fff'}/>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2e86c1',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    sideContainer: {
        height: '100%',
        width: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})