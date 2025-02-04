import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface TaskData {
  id: number;
  title: string;
  is_complete: boolean;
  toggleCheck: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number) => void;
}
const TaskCard = ({
  id,
  title,
  is_complete,
  toggleCheck,
  deleteTask,
  editTask,
}: TaskData) => {
  return (
    <View style={styles.box}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleCheck(id)}>
        <View style={styles.checkbox}>
          <Text style={styles.checkIcon}>{is_complete ? "✅" : "❌"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editbox}>
        <Text style={styles.opt}>edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deletebox} onPress={() => deleteTask(id)}>
        <Text style={styles.opt}>delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    height: 60,
    width: 350,
    // backgroundColor: "gray",
    // padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 3,
    marginBottom: 5,
  },
  titleBox: {
    flex: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    // padding: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  checkbox: {
    flex: 1,
    height: "100%",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    fontSize: 32,
  },
  editbox: {
    flex: 1,
    height: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  deletebox: {
    flex: 1,
    height: "100%",
    backgroundColor: "red",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  opt: {
    color: "white",
    fontWeight: "bold",
  },
});
