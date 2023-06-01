/* eslint-disable consistent-return */
import { useFonts } from 'expo-font';

const useAppFonts = () => {
  const [fontsLoaded, error] = useFonts({
    'Open Sans_light': require('../../assets/fonts/Open_Sans_light.ttf'),
    'Open Sans_regular': require('../../assets/fonts/Open_Sans_regular.ttf'),
    'Open Sans_semibold': require('../../assets/fonts/Open_Sans_semibold.ttf'),
    'Open Sans_bold': require('../../assets/fonts/Open_Sans_bold.ttf'),
    'Open Sans_light_italic': require('../../assets/fonts/Open_Sans_light_italic.ttf'),
    Mulish_light: require('../../assets/fonts/Mulish_light.ttf'),
    Mulish_regular: require('../../assets/fonts/Mulish_regular.ttf'),
    Mulish_semibold: require('../../assets/fonts/Mulish_semibold.ttf'),
    Mulish_bold: require('../../assets/fonts/Mulish_bold.ttf'),
    Mulish_extrabold: require('../../assets/fonts/Mulish_extrabold.ttf'),
    Mulish_light_italic: require('../../assets/fonts/Mulish_light_italic.ttf'),
    Mulish_regular_italic: require('../../assets/fonts/Mulish_regular_italic.ttf'),
    Mulish_semibold_italic: require('../../assets/fonts/Mulish_semibold_italic.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
};

export default useAppFonts;
