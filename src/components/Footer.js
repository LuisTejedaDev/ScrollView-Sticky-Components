import { StyleSheet, Text, View } from "react-native"
import Animated from "react-native-reanimated"
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({title, animatedStyles}) => {
    
    return(
        <Animated.View style={[styles.container, animatedStyles]}>
            <View style={styles.element}>
                <Material name={'bell'} size={22} color={'#fff'}/>
            </View>
            <View style={styles.element}>
                <Material name={'forum'} size={22} color={'#fff'}/>
            </View>
            <View style={styles.element}>
                <Material name={'archive'} size={22} color={'#fff'}/>
            </View>
            <View style={styles.element}>
                <Material name={'trash-can'} size={22} color={'#fff'}/>
            </View>
            <View style={styles.element}>
                <Material name={'account'} size={22} color={'#fff'}/>
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
        bottom: 0,
        left: 0,
        right: 0
    },
    element: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})