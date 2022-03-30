import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { 
    Text,
    Badge
} from "native-base";

export default function SwipeView() {
    const [listData, setListData] = useState(
        Array(5)
            .fill('')
            .map((_, i) => ({ key: `${i}`, id: 1,  description: "Garage View", date:"Yesterday", time:'11:14 am', image:"./assets/images/camera_view.jpg" })
    ));

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor='white'
        >
            <View style={styles.row}>
                {/*<Image source={{ uri: item.image }} style={styles.pic} />*/}
                <Image style={styles.pic} source={require('../assets/images/camera_view.jpg')} />
                <View>
                    <View style={styles.nameContainer}>
                        <Badge colorScheme="success" variant={"subtle"}>
                            <Text>{data.item.description}</Text>
                        </Badge>
                    </View>
                    <View style={styles.end}>
                        <Image style={[styles.icon, {marginLeft:15, marginRight:5, width:14, height:14}]} source={{uri:"https://img.icons8.com/small/14/000000/double-tick.png"}}/>
                        <Text style={styles.time}>{data.item.date} {data.item.time}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
    },
    rowBack: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        height: 100
    },
    backRightBtnLeft: {
        backgroundColor: '#76D1AD',
        right: 75,
        height: 100
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        height: 100
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 15,
        justifyContent: 'space-between',
        borderRadius: 10,
        margin: 5
    },
    pic: {
        //borderRadius: 25,
        width: 70,
        height: 70,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 15,

    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    end: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontWeight: '400',
        color: '#666',
        fontSize: 12,

    },
    icon:{
        height: 28,
        width: 28, 
    }
});