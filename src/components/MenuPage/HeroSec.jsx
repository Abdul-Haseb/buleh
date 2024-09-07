import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BreakfastOptions from "./BreakfastOptions";

const HeroSec = () => {
  return (
    <>
      <Box position={"relative"}>
        <Box zIndex={0}>
          <Image
            src="/images/menuherobg.png"
            alt="bg image"
            position={"absolute"}
            top={0}
            width={"100%"}
            h={"100%"}
            mt={-2}
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
          pb={56}
        >
          <Heading
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight={700}
            pb={4}
          >
            Menu
          </Heading>
          <Text
            maxW={{ base: "100%", md: "60%" }}
            fontSize={{ base: "small", md: "large" }}
          >
            Elevate special occasions with our curated breakfast options:
            heart-shaped pancakes for Valentine`s Day, Belgian waffles for
            Mother`s Day, rainbow sprinkle pancakes for birthdays, and smoked
            salmon bagels for anniversaries.
          </Text>
        </Flex>
      </Box>
      <BreakfastOptions />
    </>
  );
};

export default HeroSec;
