import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { IconSvg } from "../icons";

const cardData = [
  {
    image: "/images/img2.png",
    title: "Mimosa or Bellini Kits",
    desc: "A variety of premium coffee blends or specialty teas to accompany your breakfast.",
  },
  {
    image: "/images/img2.png",
    title: "Gourmet Coffee or Tea Selection",
    desc: "A variety of premium coffee blends or specialty teas to accompany your breakfast.",
  },
  {
    image: "/images/img2.png",
    title: "Mimosa or Bellini Kits",
    desc: "Beautiful bouquets of fresh flowers to add a touch of elegance to your breakfast-in-bed experience.",
  },
];

export default function Enhancement() {
  return (
    <Box px={{ base: 4, md: 10, lg: 20 }} maxW={"1440px"} mx={"auto"}>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        fontWeight={600}
        pb={4}
        color={"primary"}
        textAlign={"center"}
      >
        Add-ons and Enhancements
      </Heading>
      {cardData.map(({ image, title, desc }, index) => (
        <Flex
          key={index}
          flexDir={{ base: "column", md: "row" }}
          bg={"primary"}
          mb={"8"}
        >
          <Image src={image} alt="img" />
          <Flex
            key={index}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{ base: "column", md: "row" }}
            bgColor={"primary"}
            width={"100%"}
            p={{ base: "4", md: 6, lg: 10 }}
            color={"white"}
            gap={6}
          >
            <Box>
              <Heading size={""}>{title}</Heading>
              <Text as={"p"}>{desc}</Text>
            </Box>
            <Button
              bgColor={"btnPrimary"}
              fontSize={"small"}
              borderRadius={"3px"}
              color={"white"}
              _hover={{ bg: "white", color: "btnPrimary" }}
            >
              Add to cart
            </Button>
          </Flex>
        </Flex>
      ))}
      <Flex
        color={"primary"}
        gap={"2"}
        justifyContent={"center"}
        px={{ base: 4, md: 10, lg: 20 }}
        alignItems={"start"}
        py={10}
      >
        <span>
          <IconSvg />
        </span>
        <Text>
          Please note that prices are subject to change based on menu
          selections, customization options, and delivery location.
          <br />
          Contact us for personalized quotes and to discuss additional
          customization options for your breakfast-in-bed delivery.
        </Text>
      </Flex>
    </Box>
  );
}
