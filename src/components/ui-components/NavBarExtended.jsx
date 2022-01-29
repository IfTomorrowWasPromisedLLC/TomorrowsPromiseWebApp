/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="116px"
        height="103px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Image
          width="100px"
          height="97px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="505px"
        height="59px"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.010000000000000009px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Home"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.010000000000000009px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Features"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[1]")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.010000000000000009px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="About us"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[2]")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.010000000000000009px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Pricing"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[3]")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.010000000000000009px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="FAQ"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[4]")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="250px"
        height="41px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="213px"
          height="49px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0]")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            border="2px SOLID rgba(244.0000006556511,246.0000005364418,252.00000017881393,0.20000000298023224)"
            borderRadius="41px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].View[0]")}
          >
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(170.0000050663948,170.0000050663948,170.0000050663948,1)"
              lineHeight="28px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="15.833434280084106%"
              bottom="39.16656338438696%"
              left="24.32432577643596%"
              right="23.783781382959212%"
              padding="0px 0px 0px 0px"
              children="Contact us&#xA;"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[0].View[0].Text[0]"
              )}
            ></Text>
          </View>
        </Flex>
      </Flex>
      <Image
        width="83px"
        height="51px"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
    </Flex>
  );
}
