import {Image, TouchableOpacity, Text} from 'react-native';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({iconUrl, text, dimension, handlePress}) => {
  return (
    <TouchableOpacity style = {styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
      <Text
      resizeMode='cover'>{text}</Text>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

