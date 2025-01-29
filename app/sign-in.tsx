import { View, Text,ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'


const SignIn = () => {
  const {refetch,isLoggedIn,loading} = useGlobalContext();

  if(!loading && isLoggedIn) return <Redirect href='/' />
  console.log(loading, isLoggedIn);
  
  const handelLogin = async () => {
    const result = await login();
    if(result){
      refetch();
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  }

  return (
   <SafeAreaView className='bg-white h-full'>
    <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
        <View className='px-10'>
          <Text className='text-base font-rubik  text-center text-black-200 uppercase'>Welcome to RealState</Text>
          <Text className='text-3xl font-rubik-bold  text-center text-black-300 mt-2'>Let's Get You Closer to {'\n'}
              <Text className='text-primary-300'> Your Ideal Home</Text> 
          </Text>

          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to RealState with Google</Text>
          <TouchableOpacity onPress={handelLogin}
            className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'
          >
            <View className='flex flex-row justify-center items-center gap-x-2'>
            <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
            <Text>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SignIn