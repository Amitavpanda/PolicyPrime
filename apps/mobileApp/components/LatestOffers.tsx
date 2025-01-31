import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { icons } from '@/constants';
import { router } from 'expo-router';

const LatestOffers = ({ offer }: any) => {
    return (
        <TouchableOpacity onPress={() => router.replace(offer.path)}>
            <View className='flex flex-row justify-between items-center w-full h-[120px] p-4 bg-white rounded-md shadow-md' style={{ shadowColor: offer.theme, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 10, marginHorizontal: 10, borderBottomWidth: 4, borderBottomColor: offer.theme }}>
                {/* First Column */}
                <View className='flex flex-row items-center w-3/4'>
                    <View className="rounded-full p-2" style={{ backgroundColor: offer.theme }}>
                        <Image source={offer.icon} className="rounded-full size-16" />
                    </View>
                    <View className='flex flex-col justify-start ml-4'>
                        <Text className="bold-12" style={{ color: offer.theme }}>{offer.title}</Text>
                        <Text className='text-black-100 regular-14'>{offer.description}</Text>
                    </View>
                </View>

                {/* Second Column */}
                <View className='flex items-center justify-center w-1/4'>
                    <View className='rounded-full p-3' style={{ backgroundColor: offer.theme }}>
                        <Image source={icons.RightArrow} className='w-[24px] h-[30px]' />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default LatestOffers;