import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  UIManager,
  TouchableOpacity,
  StyleSheet,
  findNodeHandle
} from "react-native";
import { connect } from "react-redux";

class Pickup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measurements: {},
      modalVisible: false
    };
    this.measure = this.measure.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  measure() {
    this.childRef.measure((x, y, pageX, pageY, width, height) => {
      this.setState(
        {
          measurements: {
            x: x,
            y: y,
            width,
            height
          }
        },
        () => {
          this.setModalVisible(true);
          // console.log(this.state.measurements);
        }
      );
    });
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    console.log(this.props);
    return (
      <View ref={ref => (this.rootRef = ref)}>
        <View ref={ref => (this.childRef = ref)} style={styles.measure}>
          <Modal
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <View
                style={{
                  marginTop:
                    this.state.measurements.y +
                    this.state.measurements.height +
                    50,
                  marginLeft:
                    this.state.measurements.x +
                    this.state.measurements.width / 2,
                  height: 100,
                  width: 200,
                  borderRadius: 5,
                  backgroundColor: "#fff",
                  borderWidth: 2,
                  borderColor: "#ccc"
                }}
              >
                <View
                  style={[
                    styles.triangle,
                    styles.arrowUp,
                    { marginLeft: 90, marginTop: -15 }
                  ]}
                />

                <Text>Aum Namah Shivaya</Text>
              </View>
            </TouchableHighlight>
          </Modal>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.measure();
              }}
            >
              <Text style={{ textDecorationLine: "underline" }}>
                Pickup savings
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "red", fontWeight: "bold" }}>
              -${this.props.pickup}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  measure: {
    // justifyContent: "center",
    // marginTop: 30,
    // marginLeft: 30,
    // marginRight: 30,
    // padding: 5,
    // borderWidth: 1
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid"
  },
  arrowUp: {
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderLeftWidth: 10,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ccc",
    borderLeftColor: "transparent"
  }
});

const mapStateToProps = state => {
  console.log(state);
  return {
    pickup: state.CartReducer.pricing.savings
  };
};

export default connect(
  mapStateToProps,
  null
)(Pickup);
