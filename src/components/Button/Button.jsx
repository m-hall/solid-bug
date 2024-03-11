import { View, Text } from '@lightningjs/solid';
import { onMount } from "solid-js";

/**
 * Primary UI component for user interaction
 */

const styles = {
  container: {
    width: 386,
    height: 136,
    color: 0x000000ff,
    alpha: 0.3,
    borderRadius: 30,
    border: { width: 5, color: 0xcc33ffff },
    scale: 1,
    rotation: 0,
    focus: {
      color: 0x58807dff,
      scale: 1.2,
      border: { width: 5, color: 0xff0000ff },
      alpha: 1,
      rotation: Math.PI * 2,
    },
    active: {
      color: 0x33ff55ff
    },
    disabled: {
      alpha: 1,
    },
    transition: { 
      rotation: { duration: 1000 }, 
      color: { duration: 300 }, 
      scale: { duration: 300 },
      alpha: {duration: 1500, delay: 200, timing: "easy-in"}
    }
  }
};

styles.text = {
  fontSize: 32,
  lineHeight: styles.container.height,
  contain: 'width',
  textAlign: 'center',
  verticalAlign: 'middle',
  color: 0xF6F6F9ff,
  height: styles.container.height,
  width: styles.container.width,
}

export default function Button(props) {
  let textObj;

  onMount(() => {
    // short delay to allow for the lng object to be attached
    setTimeout(() => {
      console.warn('attached', textObj);
      textObj.lng.on('loaded', () => console.warn('loaded'));
    }, 100)
  });

  return (
    <View {...props} forwardStates style={styles.container}>
      <Text ref={textObj} style={styles.text}>{props.children}</Text>
    </View>
  );
}
