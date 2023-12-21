import {FC} from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

const w = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        width: w / 2.4,
        top: 20
    },
    sub: {
        shadowColor: '#000',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4
    },
    h1: {
        paddingVertical: 10,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center'
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10
    }
})

type ImageCardProps = {
    data: {
        image: string
        title: string
    }
}
export const ImageCard: FC<ImageCardProps> = ({ data}) => {
    const { container, sub, h1, cover } = styles
    const {image, title} = data
    return (
        <View style={container}>
            <View style={sub}>
                <Image style={cover} source={{ uri: image}} />
            </View>
            <Text style={h1}>{title.toUpperCase()}</Text>
        </View>
    )
}