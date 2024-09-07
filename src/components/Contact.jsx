import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { MailIcon, PhoneCall } from "./icons";

export default function ContactUs() {
  return (
    <Box pos={"relative"} mb={32}>
      <Box zIndex={0}>
        <Image
          src="/images/contactbg.png"
          alt="bg-image"
          position={"absolute"}
          top={0}
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Flex
        position={"relative"}
        flexDir={"column"}
        gap={6}
        justifyContent={"center"}
        alignItems={"center"}
        px={{ base: 4, md: 10, lg: 20 }}
        py={20}
        color={"white"}
        zIndex={20}
      >
        <Heading
          as={"h4"}
          size={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight={700}
        >
          Contact us
        </Heading>
        <Text as={"p"} display={"flex"} alignItems={"center"} gap={3}>
          <Icon>
            <MailIcon />
          </Icon>
          <span>sales@bulehbreakfastinbed.com</span>
        </Text>
        <Text as={"p"} display={"flex"} alignItems={"center"} gap={3}>
          <Icon>
            <PhoneCall />
          </Icon>
          <span>+1 65 07206649</span>
        </Text>
      </Flex>
    </Box>
  );
}
