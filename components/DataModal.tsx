import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

interface ModalData {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  addTask: (title: string) => void;
}

const DataModal = ({ modalVisible, setModalVisible, addTask }: ModalData) => {
  const [title, setTitle] = useState("");

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalcontainer}>
        <View style={styles.modalstyle}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeIcon}>ⓧ</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Add a New Task</Text>
          <TextInput
            style={styles.inpstyle}
            placeholder="Enter task name"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              addTask(title);
              setModalVisible(false);
              setTitle("");
            }}
          >
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DataModal;

const styles = StyleSheet.create({
  modalcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalstyle: {
    width: 320,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
  },
  closeIcon: {
    fontSize: 20,
    color: "gray",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inpstyle: {
    width: "100%",
    height: 40,
    backgroundColor: "#B4B4B4",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  addButton: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
