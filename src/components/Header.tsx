import {StyleSheet, Text, View} from "react-native";
import {FC} from "react";

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#30d0fe',
        justifyContent: 'center',
        paddingLeft: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        height: 90
    },
    textStyle: {
        color: '#fff',
        fontSize: 28
    }
})


type HeaderProps = {
    title: string
}
export const Header: FC<HeaderProps> = ({ title }) => {

    const { textStyle, viewStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{title}</Text>
        </View>
    )
}