
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { useRoute } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import Colors from '../Utils/Colors';

// import BasicVedioContent from '../Components/BasicVedioContent';

// import { useNavigation } from '@react-navigation/native';

// export default function BasicVedioCourseDetails() {
//     const route = useRoute();
//     const { BasicCourseTopicsData } = route.params;

//     const [Basicvedio, setBasicVedio] = useState({});

//     const navigation=useNavigation();

//     useEffect(() => {
//       setBasicVedio(BasicCourseTopicsData);
//     }, [BasicCourseTopicsData]);
    
//   return (
//     <View style={{ padding: 20, paddingTop: 35 }}>

//           {/* // go back */}
//        <TouchableOpacity onPress={()=>navigation.goBack()}>
//       <Ionicons name="arrow-back-sharp" size={24} color="black" />
//       </TouchableOpacity>

//       <View>
//       <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>{Basicvedio.title}</Text>
//       <Text style={{ color: 'blue' }}>By CodeBox</Text>

//       {/* image tag */}
//       <Image source={{ uri: Basicvedio.image }} style={{ height: 150, marginTop: 10, borderRadius: 10 }} />

//       <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 16 }}>About course</Text>
//         <Text style={{ color: 'grey' }}>{Basicvedio.desc}</Text>


//       </View>

//       <BasicVedioContent Basicvedio={Basicvedio}/>

//       </View>
//   )
// }





import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av'; // Import Video from expo-av for video playback
import Colors from '../Utils/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function BasicVedioCourseDetails() {
    const route = useRoute();
    const { BasicCourseTopicsData } = route.params;

    const navigation = useNavigation();
    const [showVideo, setShowVideo] = useState(false); // State to toggle between video and image
    const [videoUri, setVideoUri] = useState(null); // State to store video URI
    const [Basicvedio, setBasicVedio] = useState({});

    useEffect(() => {
        setBasicVedio(BasicCourseTopicsData);
    }, [BasicCourseTopicsData]);

    // Function to play video
    const playVideo = (uri) => {
        setVideoUri(uri);
        setShowVideo(true);
    };

    // Function to go back
    const goBack = () => {
        setShowVideo(false);
        setVideoUri(null);
        navigation.goBack();
    };

    return (
        <View style={{ padding: 20, paddingTop: 35 }}>
            <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>

            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>{Basicvedio.title}</Text>
                <Text style={{ color: 'blue' }}>By CodeBox</Text>

                {showVideo ? (
                    <Video
                        source={{ uri: videoUri }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="contain"
                        useNativeControls
                        style={{ height: 200, marginTop: 10, borderRadius: 10 }}
                    />
                ) : (
                    <TouchableOpacity onPress={() => playVideo(Basicvedio.image)}>
                        <Image
                            source={{ uri: Basicvedio.image }}
                            style={{ height: 150, marginTop: 10, borderRadius: 10 }}
                        />
                    </TouchableOpacity>
                )}

                <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 16 }}>About course</Text>
                <Text style={{ color: 'grey' }}>{Basicvedio.desc}</Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Video Content</Text>

                <FlatList
                    style={{ marginTop: 10 }}
                    data={Basicvedio.BasicvedioTopic}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => playVideo(item.vedioUrl)}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: 'white',
                                    marginBottom: 7,
                                    padding: 10,
                                    alignItems: 'center',
                                    borderRadius: 5,
                                }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'grey', marginRight: 14 }}>
                                    {index + 1}
                                </Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                                <Ionicons
                                    name="play-circle"
                                    size={24}
                                    style={{ marginLeft: 'auto' }}
                                    color={Colors.Primary}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
}
