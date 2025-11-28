import * as React from 'react'; 
import { Text, View, Button, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://wallpapercave.com/wp/wp3396924.jpg'
      }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ fontSize: 22, marginBottom: 20, color: 'black' }}>
        Home Screen
      </Text>

     <Button
  title="Go to Details"
  onPress={() =>
    navigation.navigate('Details', {
      message: `Ahtisa Manalo placed in the Top 5 of Miss Universe 2025, the Philippine's highest placement in three years. She shared her inspiring story of growing up poor and joining pageants at age 10 to support her schooling and family.

She said she wants to be “the hope of people,” showing that hard work and persistence can overcome difficult situations. Her heartfelt Q&A and strong performance impressed many. She has Filipino, Finnish, Spanish, and Swedish heritage and earned an Accountancy degree.`
    })
  }
/>

<View style={{ height: 10 }} />


      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </ImageBackground>
  );
}


function DetailsScreen({ route, navigation }) {
  const { message } = route.params; 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Ahtisa Manalo Details</Text>

      <Text style={{ fontSize: 18, color: 'gray', marginBottom: 20 }}>
        {message}
      </Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Profile Screen
      </Text>

  
      <Image
        source={{
          uri:'https://share.google/images/KLPQ86QhUQkh9VM0F'
        }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          marginBottom: 20
        }}
      />

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome Home" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
