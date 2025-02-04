import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskCard from "@/components/TaskCard";
import DataModal from "@/components/DataModal";

const index = () => {
  interface TaskInterface {
    id: number;
    title: string;
    is_complete: boolean;
  }
  const [taskList, setTaskList] = useState<TaskInterface[]>([
    { id: 1, title: "task1", is_complete: false },
    // { id: 2, title: "task2", is_complete: true },
    // { id: 3, title: "task3", is_complete: true },
    // { id: 4, title: "task4", is_complete: false },
    // { id: 5, title: "task5", is_complete: true },
    // { id: 6, title: "task6", is_complete: true },
    // { id: 7, title: "task7", is_complete: true },
    // { id: 8, title: "task8", is_complete: true },
    // { id: 9, title: "task9", is_complete: true },
    // { id: 10, title: "task10", is_complete: true },
  ]);
  // const [task, setTask] = useState<TaskInterface>();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <DataModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <View style={styles.heading}>
            <Text style={styles.headtext}>
              TaskManager - create and complete!
            </Text>
          </View>
          <View style={styles.taskList}>
            <FlatList
              data={taskList}
              contentContainerStyle={{ alignItems: "center" }}
              renderItem={({ item }) => (
                <TaskCard title={item.title} is_complete={item.is_complete} />
              )}
            />
          </View>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.addicon}>{modalVisible ? "" : "⨁"}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default index;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    // backgroundColor: "gray",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  taskList: {
    height: 400,
    width: "100%",
  },

  heading: {
    height: 100,
    justifyContent: "center",
  },
  headtext: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  addicon: {
    fontSize: 42,
    fontWeight: "bold",
  },
});
