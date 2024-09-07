import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const data = [
  {
    image: "/images/testimonials1.png",
    name: "Marcelo",
    position: "CEO",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eui. Fusce a iaculis leo. Maecen tempor hendrerit cursus. Maecenas tempor hendrerit cursus. Phasellus a diam lectus.  ",
  },
  {
    image: "/images/testimonials2.png",
    name: "Alfredo",
    position: "Designer",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eui. Fusce a iaculis leo. Maecen tempor hendrerit cursus. Maecenas tempor hendrerit cursus. Phasellus a diam lectus.  ",
  },
  {
    image: "/images/testimonials3.png",
    name: "Mark",
    position: "Designer",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eui. Fusce a iaculis leo. Maecen tempor hendrerit cursus. Maecenas tempor hendrerit cursus. Phasellus a diam lectus.  ",
  },
];

const Testimonials = () => {
  return (
    <Box
      px={{ base: 4, md: 10, lg: 20 }}
      pb={{ base: 20, md: 32 }}
      maxW={"1440px"}
      mx={"auto"}
    >
      <Flex
        flexDir={{ base: "column", md: "row" }}
        color={"primary"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"10"}
      >
        <Heading size={{ base: "2xl", md: "3xl" }}>Testimonials</Heading>
        <Box>
          {data.map(({ image, name, position, des }, index) => (
            <Flex
              key={index}
              border={"1px solid #012269"}
              borderRadius={"20"}
              p={8}
              alignItems={"center"}
              gap={3}
              mb={5}
              maxW={"657px"}
              ml={{ base: 0, md: index % 2 === 1 && "-32" }}
              bgColor={index % 2 === 1 && "primary"}
            >
              <Box minW={"20%"}>
                <Image src={image} alt={name} />
              </Box>
              <Box color={index % 2 === 1 && "white"}>
                <Heading size={"md"} pb={1}>
                  {name}
                </Heading>
                <Heading size={"xs"} as={"h5"}>
                  {position}
                </Heading>
                <Text fontSize={"small"} as={"p"}>
                  {des}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimonials;
