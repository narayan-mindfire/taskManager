import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
interface ModalData {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}
const DataModal = ({ modalVisible, setModalVisible }: ModalData) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalcontainer}>
        <View style={styles.modalstyle}>
          <Text>hi this is a modal</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.rmbtn}>ⓧ</Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalstyle: {
    height: 300,
    width: 300,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  rmbtn: {
    marginTop: 30,
    fontSize: 32,
  },
});
