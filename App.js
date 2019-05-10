import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableHighlight
} from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./src/reducers";
import Header from "./src/components/Header";
import Card from "./src/components/Card";
import CardSection from "./src/components/CardSection";
import Pickup from "./src/components/Pickup";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header headerText="Product Summary" />
          <Card>
            <View>
              <View style={styles.contentStyle}>
                <Text>Subtotal</Text>
                <Text style={{ fontWeight: "bold" }}>$102.96</Text>
              </View>
              <Pickup />
              <View>
                <View style={styles.contentStyle}>
                  <Text>Est. taxes & fees</Text>
                  <Text style={{ fontWeight: "bold" }}>$8.92</Text>
                </View>
                <View style={styles.contentStyle}>
                  <Text>(Based on 94085)</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
  contentStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
});
