import { View } from "react-native-web"
import ReadMore from "../../components/ReadMore"

export default function Home() {
  return (
    <View>
      <ReadMore
        title={"TWICE回歸！ STRATEGY主打歌曝　粉絲讚「酷又甜美」"}
        content={"TWICE 即將在12月6日發行迷你14輯《STRATEGY》，近日陸續傳出她們將合作歐美大咖歌手，除了已經宣布的美國饒舌歌手 Megan Thee Stallion(梅根尤物)外，還傳出 Coldplay 也是合作歌手之一， 尤其是 TWICE 將擔任 Coldplay 明年世巡首爾場的特別嘉賓，更是讓外界期待兩團的合作，而近日網上瘋傳 TWICE 這次新專輯歌單，竟然除了兩組歐美大咖外，還有 IU！TWICE 這次新專輯《STRATEGY》在發行前就討論度超高，而近日竟疑似專輯歌單外流，強大陣容也直接被瘋傳，除了同名歌曲〈STRATEGY〉將合作 Megan Thee Stallion 外，歌單上竟還出現與其他歌手的合作曲，與 Coldplay 合作的〈UMBRELLA〉，以及與 IU 合作的〈LULLABY〉，超強陣容火速引起熱議。雖然歌單真實性尚未被證實，但已經讓粉絲都超期待，紛紛留言表示「雖然不知道是不是真的，但有 IU 和 Coldplay 真的很扯...」、「喔買尬，這次陣容真的很大欸，雖然不知道是不是真的，但先小小相信一下」、「希望是真的!!!」、「IU 不清楚，但她們是明年 Coldplay 在韓國六場演唱會的嘉賓，如果12月的專輯有合作曲，當這六場的嘉賓就很合理」等，討論度不斷。"}
        lineLimit={3}
      />
    </View>
  )
}