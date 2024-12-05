import { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ReadMore({ title, content, lineLimit = 9999 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [newLine,setNewLine] = useState(null);
  const [totalLine, setTotalLine] = useState(null);
  const contentRef = useRef();

  useEffect(() => {
    const contentHeight = contentRef.current.clientHeight;   // 元素的可視高度
    setTotalLine(contentHeight / 23);  // 高度除行高
  }, [])

  useEffect(() => {
    if (totalLine > lineLimit) {
      setIsMore(true);
      setNewLine(lineLimit);
    }
  },[totalLine])

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contentArea}>
        <Text numberOfLines={isOpen ? null : newLine} style={styles.content} ref={contentRef}>{content}</Text>
      </View>
      {isMore ? (
        <View style={styles.moreButton}>
          <TouchableOpacity onPress={()=>setIsOpen(!isOpen)}><Text style={styles.buttonText}>{isOpen ? "Read more" : "Read less"}</Text></TouchableOpacity>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    width: windowWidth * 0.6,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  title: {
    fontSize: 25,
  },
  titleArea: {
    marginBlock: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 23,
  },
  contentArea: {
    marginBottom: 10,
  },
  moreButton: {
    backgroundColor: '#0072E3',
    width: 120,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 3,
    marginBottom: 15,
  },
  buttonText: {
    color: '#F0F0F0',
    textAlign: 'center',
    fontSize: 18,
  },
});