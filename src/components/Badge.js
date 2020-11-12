import React, { memo, useMemo, useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BADGE_SIZE = 15;

const BadgeComponent = ({ iconSize }) => {
  const [count, setCount] = useState(12);
  const containerStyle = useMemo(
    () => ({
      ...styles.container,
      transform: [
        { translateX: (iconSize - BADGE_SIZE / 1.3) / 2 },
        { translateY: (iconSize - BADGE_SIZE / 1.3) / -2 },
      ],
   
    }),
    [iconSize]
  );

  useEffect(() => {
    // const intervalId = setInterval(() => setCount(state => state + 1), 2500);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  return (
    <View style={containerStyle}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

export const Badge = memo(BadgeComponent);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    minWidth: BADGE_SIZE,
    minHeight: BADGE_SIZE,
    borderRadius: BADGE_SIZE,
    backgroundColor: 'red',
    zIndex:1,
  },
  count: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 1,
    lineHeight: BADGE_SIZE,
    fontSize: 12,
  },
});

