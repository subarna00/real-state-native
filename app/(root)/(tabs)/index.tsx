import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import { useContext } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const {user} = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList data={[1,2,3]} 
        renderItem={({item})=> <Card onPress={() => {}} />}
        keyExtractor={(item)=> item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        ListHeaderComponent={
          <View className="px-5">
          <View className="flex flex-row items-center justify-between mt-5">
            <View className="felx flex-row items-center">
              <Image source={{uri: user?.avatar}} className="size-12 rounded-full" />
              <View className="flex flex-col ml-2 items-start justify-center">
                <Text className="text-xs font-rubik text-black-100">
                  Good Morning
                </Text>
                <Text className="text-base font-rubik-medium text-black-300">
                  {user?.name}
                </Text>
              </View>
            </View>
            <Image source={icons.bell} className="size-6" />
          </View>
  
          <Search />
  
          {/* featured */}
          <View className="my-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl text-black-300 font-rubik-bold">
                Featured
              </Text>
              <TouchableOpacity>
                <Text className="text-base text-primary-300 font-rubik-bold">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            horizontal
            data={[1, 2, 3]}
            renderItem={({ item }) => <FeaturedCard onPress={() => {}} />}
            keyExtractor={(item) => item.toString()}
            contentContainerClassName="flex gap-5 mt-5"
            bounces={false}
            showsHorizontalScrollIndicator={false}
            />
  
          {/* Recommendation */}
          <View className="my-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl text-black-300 font-rubik-bold">
                Recommendation
              </Text>
              <TouchableOpacity>
                <Text className="text-base text-primary-300 font-rubik-bold">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Filters />
  
        
        </View>
        }
      />
    
    </SafeAreaView>
  );
}
