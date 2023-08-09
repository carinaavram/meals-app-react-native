import { Platform } from "react-native";

const shadowStyle = {
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
}

export default shadowStyle;