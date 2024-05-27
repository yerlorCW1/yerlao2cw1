import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>Counter:{count}</Text>
            <view style={{ flexDirection: "rew", marginTop: 20, gap: 10 }}>
                <Button title="Increment" onPress={increment} />
                <Button title="Decrement" onPress={decrement} />
            </view>

        </View>
    );
};
export default CounterApp;