import React, { useEffect } from "react"
import { View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions,
  ScrollView
} from "react-native"
import { authentification } from "../constant/firebaseConfig"
import { HomeStack } from "../types/stackParam"
import { signOut } from "firebase/auth"
import { Colors, styles } from "../constant/Styles"
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window")

const HomeScreen = ({navigation}: HomeStack) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const handleSignOut = () => {
    signOut(authentification)
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView style={{ ...styles.SafeArea, backgroundColor: Colors.light }}>
        <View className="flex-row justify-between items-center mx-4 mb-2">
          <View className="flex-row items-center space-x-2">
            <View className="w-8 h-8 border rounded-full" style={{ backgroundColor: Colors.white, borderColor: Colors.white }}></View>
            <View className="flex-col space-y-0">
              <Text className="text-sm" style={{color:Colors.darkBlue}}>Hi, {authentification.currentUser?.email}</Text>
              <Text className="text-xs" style={{color:Colors.black}}>welcome to expo auth app</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.9} onPress={handleSignOut}>
            <Ionicons name="log-out-outline" size={27} style={{ color: Colors.blue }} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mx-4">
          <View className="border rounded-md" style={{ width: width * 0.9, height: height * 0.2, backgroundColor: Colors.blue, borderColor: Colors.light }}>
            <LottieView source={require('../assets/animations/home.json')} autoPlay loop />
          </View>
          <Text className="mt-4 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem blanditiis, adipisci ratione minima dolor vero libero fugiat unde consequuntur aspernatur sit inventore tenetur mollitia sapiente, illum est velit quibusdam et labore architecto quaerat distinctio corporis? Neque reiciendis saepe voluptates ea quaerat dolor sed obcaecati cupiditate maxime tenetur autem, unde aut nesciunt vero ratione veniam harum doloribus placeat error, nostrum vel soluta dignissimos? Dicta vel eaque in neque reiciendis tempore temporibus ab vero magni accusantium sapiente necessitatibus assumenda eum non ducimus animi, odit quam voluptate obcaecati deleniti alias perspiciatis? Consequuntur commodi quae adipisci facere voluptatum, tempore aperiam aut rem quis maxime exercitationem iure maiores beatae necessitatibus quasi neque iusto et totam ad cum aliquam consequatur. Neque explicabo ipsum eaque voluptate tempore nihil, deserunt nam molestiae cumque tempora, perferendis, repudiandae voluptatum cupiditate? Cumque quos tempore blanditiis possimus laboriosam quaerat saepe minus error esse rem laborum beatae aperiam facere voluptate, sequi illo ea, sed distinctio reiciendis provident aliquam nobis officiis, in expedita? Error aperiam maiores quam doloribus! Explicabo voluptates temporibus natus. Ducimus cupiditate dolorum temporibus, libero exercitationem molestiae error odit ab ea autem nobis maiores quisquam quia minima natus id ratione officiis ipsa cumque nesciunt asperiores? Impedit eaque officia delectus minus accusamus fuga pariatur, repudiandae mollitia corrupti dolorum cum. Natus aperiam sunt, nobis, repudiandae mollitia quasi voluptatum totam inventore, accusamus expedita tempora temporibus. Voluptates, consequuntur ipsum dolores quaerat quia nostrum quisquam nihil nam harum cupiditate temporibus alias placeat ex repellendus repudiandae, optio, tempora cumque accusamus officia magnam a! Distinctio consectetur assumenda doloremque! At dolorem distinctio sapiente architecto repellat, incidunt, repudiandae est similique perferendis consectetur eius tenetur. Voluptates architecto iste impedit, atque ipsa dolore ullam voluptate reiciendis vero dolores recusandae adipisci eius nemo velit? Error dolorem tempore at! Exercitationem perferendis nostrum harum laudantium tenetur corrupti explicabo. Vero, eveniet temporibus deserunt expedita quae ratione! Minima molestiae aut excepturi error quis odit nostrum eligendi cupiditate delectus nihil cum voluptatem fuga reprehenderit id, cumque libero blanditiis ducimus sapiente adipisci. Repellat adipisci ea recusandae totam minima tempore veniam dolor sapiente ipsam, labore laboriosam alias! Veritatis pariatur incidunt quibusdam ipsa ducimus corporis dignissimos at ullam, modi dolorem sequi molestias odio molestiae provident, iste amet veniam dolore officia, suscipit aspernatur nemo officiis. Blanditiis, ea ipsa veritatis natus inventore esse illum ipsam harum numquam qui assumenda, nostrum illo ratione sunt facere repellendus. Itaque facere impedit odit ducimus illo, iste, beatae nisi aspernatur, dicta animi omnis sint? Possimus ex est nihil nesciunt in repudiandae, deleniti porro molestias dignissimos fuga quidem cumque recusandae libero id reiciendis doloremque similique. Sed ut, enim, tempora reprehenderit magni recusandae veritatis incidunt beatae corporis, facere iste id quidem quaerat atque accusantium sit. Voluptates saepe perspiciatis dolorum error eos commodi, ducimus autem nemo tempora enim itaque at qui porro amet facilis sit! Consequatur incidunt magni perspiciatis quas commodi. Ipsum corporis maiores rerum deserunt amet cumque debitis, deleniti officia? Ipsa corporis aut repellendus qui assumenda accusantium veniam ratione dolores mollitia. Molestiae eveniet inventore aliquid nulla perspiciatis atque recusandae laudantium quasi, nemo hic vero, laborum enim labore exercitationem voluptatem veritatis libero?</Text>
        </View>
      </ScrollView>
      <StatusBar style={"dark"}/>
    </View>
  )
}

export default HomeScreen