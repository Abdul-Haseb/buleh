import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { InstagramIcon, TwitterIcon, YoutubeIcon } from "./icons";

export default function Footer() {
  return (
    <Box bgColor="primary" py={6} color={"white"} zIndex={10}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: 4, md: 10, lg: 20 }}
        py={{ base: 5, md: 0 }}
      >
        <Box>
          <Image src={"/images/logo.png"} alt="logo" width={110} height={110} />
        </Box>
        <Flex gap={4} alignItems={"center"}>
          <YoutubeIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Flex>
      </Flex>

      <hr />
      <Flex
        px={{ base: 4, md: 10, lg: 20 }}
        flexDir={{ base: "column", md: "row" }}
        py={4}
        fontWeight={300}
        justify={"space-between"}
        alignItems={"center"}
      >
        <Text>Copyright © 2023 All rights reserved</Text>
        <Text display="flex" gap={4}>
          <Text>FAQs</Text>
          <Text>Terms of service</Text>
          <Text>Legal</Text>
          <Text>Privacy policy</Text>
        </Text>
      </Flex>
    </Box>
  );
}
