import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

function IconButton({icon, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed ? styles.pressed : null]} >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    },
    button: {
     paddingHorizontal: 10,
    }
})
