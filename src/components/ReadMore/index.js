import { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

export default function ReadMore({ title, content, lineLimit = null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [newLine, setNewLine] = useState(null);
  const [totalLine, setTotalLine] = useState(null);
  const contentRef = useRef();

  useEffect(() => {
    if (Platform.OS === 'web') {
      const contentDOM = contentRef.current;
      const range = document.createRange();
      range.selectNodeContents(contentDOM);
      const rects = Array.from(range.getClientRects());
      const rectsLines = new Set([]);
      rects.forEach((line) => rectsLines.add(line.top))
      setTotalLine(rectsLines.size);
    }
  }, [])

  useEffect(() => {
    if (lineLimit &&  totalLine > lineLimit) {
      setIsMore(true);
      setNewLine(lineLimit);
    }
  }, [totalLine])

  const onTextLayout = (e) => {
    if (Platform.OS !== 'web') {
      const { lines } = e.nativeEvent;
      setTotalLine(lines.length);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contentArea}>
        <Text numberOfLines={isOpen ? null : newLine} style={styles.content} ref={contentRef} onTextLayout={onTextLayout}>{content}</Text>
      </View>
      {isMore ? (
        <View style={styles.moreButton}>
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)}><Text style={styles.buttonText}>{isOpen ? "Read less" : "Read more"}</Text></TouchableOpacity>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    width: Platform.OS === 'web' ? '60%' : '80%',
    paddingHorizontal: 15,
    borderRadius: 3,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 25,
    textAlign: 'justify',
  },
  titleArea: {
    marginBlock: 15,
  },
  content: {
    fontSize: 16,
    textAlign:"justify"
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