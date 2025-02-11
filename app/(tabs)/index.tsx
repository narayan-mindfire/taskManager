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
  const [taskList, setTaskList] = useState<TaskInterface[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  function addTask(inpTitle: string) {
    let newTask: TaskInterface = {
      id: Date.now(),
      title: inpTitle,
      is_complete: false,
    };
    setTaskList([...taskList, newTask]);
  }

  function toggleCheck(taskId: number) {
    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === taskId ? { ...task, is_complete: !task.is_complete } : task
      )
    );
  }
  function deleteTask(taskId: number) {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  }

  function editTask(taskId: number) {}

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <DataModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            addTask={addTask}
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
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TaskCard
                  id={item.id}
                  title={item.title}
                  is_complete={item.is_complete}
                  toggleCheck={toggleCheck}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
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
