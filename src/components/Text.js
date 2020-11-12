import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { Fonts,Colors,} from '../theme'
export const FText = (props) => 
{

    const {
        h1,
        h2,
        h3,
        h4,
        title,
        body,
        caption,
        small,
        size,
        transform,
        align,
        // styling
        regular,
        bold,
        semibold,
        medium,
        weight,
        light,
        center,
        right,
        spacing, // letter-spacing
        height, // line-height
        // colors
        color,
        accent,
        primary,
        secondary,
        tertiary,
        black,
        white,
        gray,
        gray2,
        style,
        children,
        ...rest
       } = props


       const textStyles = [
        styles.text,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        title && styles.title,
        body && styles.body,
        caption && styles.caption,
        small && styles.small,
        size && { fontSize: size },
        transform && { textTransform: transform },
        align && { textAlign: align },
        height && { lineHeight: height },
        spacing && { letterSpacing: spacing },
        weight && { fontWeight: weight },
        regular && styles.regular,
        bold && styles.bold,
        semibold && styles.semibold,
        medium && styles.medium,
        light && styles.light,
        center && styles.center,
        right && styles.right,
        color && styles[color],
        color && !styles[color] && { color },        
        style // rewrite predefined styles
      ];   
    return(
    <Text style={textStyles} {...rest}>
        {children}
      </Text>
);}


const styles = StyleSheet.create({
    // default style
    text: {
      fontSize: 12,
      fontFamily:'DamascusLight'
    },
    // variations
    regular: {
      fontWeight: "normal",
    },
    bold: {
      fontWeight: "bold",
    },
    semibold: {
      fontWeight: "500",
    },
    medium: {
      fontWeight: "500",
    },
    light: {
      fontWeight: "200",
    },
    // position
    center: { textAlign: "center" },
    right: { textAlign: "right" },
    
    // fonts
    h1: Fonts.h1,
    h2: Fonts.h2,
    h3: Fonts.h3,
    h4: Fonts.h4,
    title: Fonts.title,
    body: Fonts.body,
    caption: Fonts.caption,
    small: Fonts.small
  });
  


