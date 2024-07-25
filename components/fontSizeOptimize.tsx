import { PixelRatio } from "react-native";
export const FontSizer = (size: number): number => {
    const fontScale = PixelRatio.getFontScale();
    return size / fontScale;
  };
