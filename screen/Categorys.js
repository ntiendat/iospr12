import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CategoryListItem from '../components/CategoryListItem'
import { StyleSheet, Text, View  , ScrollView , FlatList} from 'react-native';

export default function Categorys() {

  
  const {categori}= {
    categori:[
      { title:'Nhiều kiểu che biển số tránh phạt nguội' , 
      img :'https://i1-vnexpress.vnecdn.net/2020/12/25/dan-bien-so-xe-6624-1608877519.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=Roo2gYfPya8S2r2CRd2YYw',
      content:'Qua tuần tra, CSGT phát hiện nhiều kiểu che biển số như dùng băng dính, kẹp giấy hoặc quân bài điều khiển bằng dây thép.  Sáng 25/12, tổ công tác thuộc Đội số 1 (Cục CSGT) gồm ba cán bộ, chiến sĩ tuần tra trên cao tốc Nội Bài - Lào Cai để phát hiện xe vi phạm giao thông, dán biển số tránh phạt nguội'  },
      
      { title:'Nhiều kiểu che biển số tránh phạt nguội' , 
      img :'https://i1-vnexpress.vnecdn.net/2020/12/25/dan-bien-so-xe-6624-1608877519.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=Roo2gYfPya8S2r2CRd2YYw',
      content:'Qua tuần tra, CSGT phát hiện nhiều kiểu che biển số như dùng băng dính, kẹp giấy hoặc quân bài điều khiển bằng dây thép.  Sáng 25/12, tổ công tác thuộc Đội số 1 (Cục CSGT) gồm ba cán bộ, chiến sĩ tuần tra trên cao tốc Nội Bài - Lào Cai để phát hiện xe vi phạm giao thông, dán biển số tránh phạt nguội'  },
      
      { title:'Nhiều kiểu che biển số tránh phạt nguội' , 
      img :'https://i1-vnexpress.vnecdn.net/2020/12/25/dan-bien-so-xe-6624-1608877519.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=Roo2gYfPya8S2r2CRd2YYw',
      content:'Qua tuần tra, CSGT phát hiện nhiều kiểu che biển số như dùng băng dính, kẹp giấy hoặc quân bài điều khiển bằng dây thép.  Sáng 25/12, tổ công tác thuộc Đội số 1 (Cục CSGT) gồm ba cán bộ, chiến sĩ tuần tra trên cao tốc Nội Bài - Lào Cai để phát hiện xe vi phạm giao thông, dán biển số tránh phạt nguội'  },
      
      { title:'Nhiều kiểu che biển số tránh phạt nguội' , 
      img :'https://i1-vnexpress.vnecdn.net/2020/12/25/dan-bien-so-xe-6624-1608877519.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=Roo2gYfPya8S2r2CRd2YYw',
      content:'Qua tuần tra, CSGT phát hiện nhiều kiểu che biển số như dùng băng dính, kẹp giấy hoặc quân bài điều khiển bằng dây thép.  Sáng 25/12, tổ công tác thuộc Đội số 1 (Cục CSGT) gồm ba cán bộ, chiến sĩ tuần tra trên cao tốc Nội Bài - Lào Cai để phát hiện xe vi phạm giao thông, dán biển số tránh phạt nguội'  },
      
   
    ]
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{width:'100%',paddingLeft:16,paddingRight:16}} >
     
    {
      categori.map((item,index)=>{
        return ( <CategoryListItem title={item.title} key={index} img={item.img} content={item.content} />)
      })
    }
    {/* <FlatList data={categori} renderItem={({item,index })=> <CategoryListItem title={item.title} img={item.img} keyExtractor={index} />}>
      
    </FlatList> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
