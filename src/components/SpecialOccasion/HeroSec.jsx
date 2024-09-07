import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Occasions from "./Occasions";

export default function HeroSection() {
  return (
    <>
      <Box position={"relative"}>
        <Box zIndex={0}>
          <Image
            src="/images/specialoccasionbg.png"
            alt="bg image"
            position={"absolute"}
            top={-2}
            width={"100%"}
            h={"100%"}
          />
        </Box>
        <Flex
          px={{ base: 4, md: 10, lg: 20 }}
          position={"relative"}
          direction={"column"}
          zIndex={20}
          color={"white"}
          alignItems={"center"}
          textAlign={"center"}
          pt={28}
          pb={72}
        >
          <Heading
            size={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight={800}
            pb={4}
          >
            Special Occasions
          </Heading>
          <Text
            as={"p"}
            maxW={{ sm: "100%", md: "65%" }}
            fontSize={{ base: "16px", md: "large" }}
          >
            Elevate special occasions with our curated breakfast options:
            heart-shaped pancakes for Valentine`s Day, Belgian waffles for
            Mother`s Day, rainbow sprinkle pancakes for birthdays, and smoked
            salmon bagels for anniversaries.
          </Text>
        </Flex>
      </Box>
      <Occasions />
    </>
  );
}
