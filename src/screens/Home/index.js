import { ScrollView, View, StyleSheet } from "react-native"
import ReadMore from "../../components/ReadMore"
import { newsDatas } from "./newsDatas"

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {newsDatas.map((news) => (
          <View key={news.id} style={styles.readMore}>
            <ReadMore
              title={news.title}
              content={news.content}
              lineLimit={news.lineLimit}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    marginTop: 80,
  },
  readMore: {
    marginTop: 20,
  },
  container: {
    flex:1,
    paddingBottom: 40,
  }
})