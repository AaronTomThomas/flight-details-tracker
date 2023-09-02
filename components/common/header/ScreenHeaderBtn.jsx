import {View, Image, TouchableOpacity} from 'react-native';

import { COLORS, SIZES } from '../../../constants';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({iconUrl, text, dimension, handlePress}) => {
  return (
    <TouchableOpacity style = {styles.btnContainer} onPress={handlePress}>
      <View  style = {{
                            width: 50,
                            height: 50,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.medium,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
      <Image
        source={iconUrl}
        resizeMode='contain'
        style={styles.btnImg(dimension)}
      />
      </View>
    </TouchableOpacity>
    
  );
};

export default ScreenHeaderBtn;

