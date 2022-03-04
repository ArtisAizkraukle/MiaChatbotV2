import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from "../components/NavOptions";
import ChatArea from "../components/ChatArea";
import { GOOGLE_MAPS_APIKEY, HEADER_IMG_URI } from "@env";

const HomeScreen = () => {
	return (
		<SafeAreaView style={tw`bg-red-500 h-full`}>
			<View style={tw`p-0`}>
				<Image
				style={{
					width: 435,
					height: 150,
				}}
				source={require(HEADER_IMG_URI)}
			/>

			<ChatArea />
			<NavOptions />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen

const styles = StyleSheet.create({
	text: {
		color: "blue",
	},
})
