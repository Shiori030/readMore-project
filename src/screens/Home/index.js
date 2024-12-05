import { View } from "react-native-web"
import ReadMore from "../../components/ReadMore"

export default function Home() {
  return(
      <View>
        <ReadMore 
          title={"TWICE回歸！ STRATEGY主打歌曝　粉絲讚「酷又甜美」"}
          content={"韓國女團TWICE最新的第14張迷你專輯，即將在12月6日正式發行。成員近期在官方頻道上率先公開主打歌的舞蹈，成員們一身校園辣妹衣著跳起超酷舞蹈，讓粉絲大讚「又酷又甜美」讓人好期待，想快點到發行那一天。另外同樣為女團的(G)I-DLE在不久前的MMA頒獎典禮上宣布全員續約，並表示5人要一直在一起同樣感動不少人。"}
          lineLimit={2}
        />
      </View>
  )
}