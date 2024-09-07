import { Box, Flex, Image, Text } from "@chakra-ui/react";

const data = [
  {
    image: "/images/preparation.png",
    title: "Preparation",
    desc: "We meticulously prepare all ingredients and dishes ahead of time to ensure a seamless and delightful breakfast-in-bed experience. By taking care of the details in advance, we guarantee a smooth and enjoyable start to the day for your loved ones.",
  },
  {
    image: "/images/neatpresentation.png",
    title: "Neat Presentation",
    desc: "Our attention to detail extends to the presentation of the breakfast spread. We understand the importance of a neat and visually appealing presentation, as it enhances the overall experience for the recipient and adds an extra touch of elegance to the occasion.",
  },
  {
    image: "/images/beveragehandling.png",
    title: "Beverage Handling",
    desc: "We prioritize beverage handling to prevent spillages and maintain the pristine condition of the breakfast spread. Each beverage is carefully carried separately to ensure that every aspect of the breakfast-in-bed experience is flawless and enjoyable.",
  },
  {
    image: "/images/personaliztion.png",
    title: "Personalization",
    desc: "We believe in the power of personalization to make the breakfast-in-bed gesture truly meaningful and memorable. Whether it's sourcing special ingredients or recreating a dish from a cherished restaurant or moment in time, we tailor each experience to reflect the unique preferences and memories of the recipient.",
  },
  {
    image: "/images/delivery.png",
    title: "Delivery",
    desc: "Experience a touch of British - Scottish charm as a kilted gentleman delivers your breakfast in bed. Indulge in a variety of traditional international delights paired with English tea or coffee, courtesy of Buleh Breakfast in Bed. Whether it's a special occasion or just a luxurious treat, this experience is guaranteed to elevate your morning routine to new heights.",
  },
  {
    image: "/images/trashcollection.png",
    title: "Trash Collection",
    desc: "After breakfast in bed, we make sure trash collection is swift and efficient. You can count on us to keep your surroundings clean and tidy.",
  },
];

export default function ServicesCard() {
  return (
    <Box px={[3, 10, 20]} pt={12} pb={28} color="white">
      {data.map(({ image, title, desc }, index) => (
        <Flex key={index} justifyContent="center">
          <Flex
            flexDir={{
              base: "column",
              md: index % 2 === 0 ? "row-reverse" : "row",
            }}
            alignItems="center"
            flex="1"
            mb={10}
          >
            <Box>
              <Image
                src={image}
                alt={title}
                w={500}
                h={500}
                boxShadow="lg"
                rounded="md"
              />
            </Box>
            <Box
              position={"relative"}
              bg="#012269"
              maxW="md"
              boxShadow="lg"
              zIndex="30"
              p={8}
              rounded="sm"
              ml={{ base: 0, md: index % 2 === 0 ? "" : "-10" }}
              mr={{ base: 0, md: index % 1 === 0 ? "-10" : "0" }}
            >
              <Text as="h4" fontWeight={700} fontSize={"large"}>
                {title}
              </Text>
              <Text>{desc}</Text>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
}
