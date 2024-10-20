import {useScroll} from '../hooks'
import {StyleSheet} from 'react-native'
import {isIOS} from '../constants'
import Animated from 'react-native-reanimated'

export default ({Header = undefined, Footer = undefined, FloatingButton = undefined, totalHeight = 55, children}) => {

    const {scrollHandler, headerStyleAndroid, headerStyleIOS, footerStyleAndroid, footerStyleIOS, floatStyleAndroid, floatStyleIOS} = useScroll()

    return(
        <>
            <Animated.ScrollView 
                alwaysBounceVertical={false}
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: totalHeight}}
                style={styles.scroll} 
                onScroll={scrollHandler}
            >
                {
                    children
                }
            </Animated.ScrollView>
            {
                Header
                &&
                    <Header animatedStyles={isIOS ? headerStyleIOS : headerStyleAndroid}/>
            }
            {
                FloatingButton
                &&
                    <FloatingButton animatedStyles={isIOS ? floatStyleIOS : floatStyleAndroid}/> /* Falta crear y agregar el style animado de iOS */
            }
            {
                Footer
                &&
                    <Footer animatedStyles={isIOS ? footerStyleIOS : footerStyleAndroid}/>
            }
        </>
    )
}

const styles = StyleSheet.create({
    scroll: {
        height: 'auto',
        alignSelf: 'stretch',
        padding: 14
    }
})