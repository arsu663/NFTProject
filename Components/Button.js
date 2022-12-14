import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const Circlebutton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignContent: "center",
            alignItems: "center",
            ...SHADOWS.light,
            ...props
        }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{ width: 24, height: 40 }}
            />

        </TouchableOpacity>
    )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <View>
            <TouchableOpacity style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                marginBottom:15,
                marginRight:10,
                ...props
            }}
                onPress={handlePress}
            >
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: "center"
                }}>Place a Bid</Text>
            </TouchableOpacity>
        </View>
    )
}


