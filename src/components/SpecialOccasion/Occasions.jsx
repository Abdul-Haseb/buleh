import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const cardsData = [
  {
    image: "/images/valentineday.png",
    title: "Valentine's Day",
    desc: "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
  {
    image: "/images/birthday.png",
    title: "Birth Day",
    desc: "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
  {
    image: "/images/anniver.png",
    title: " Anniversaries Day",
    desc: "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
  {
    image: "/images/motherday.png",
    title: "Mother`s Day",
    desc: "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
  {
    image: "/images/fatherday.png",
    title: "Father`s Day",
    desc: "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
  {
    image: "/images/selftreat.png",
    title: "Self Treat Ordinary Day",
    desc: "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
  {
    image: "/images/netflix.png",
    title: "Netflix & Chill",
    desc: "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
  {
    image: "/images/womenday.png",
    title: "Women`s Day",
    desc: "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
];

const Occasions = () => {
  return (
    <Box
      position={"relative"}
      zIndex={30}
      mt={-272}
      maxW={"1440px"}
      mx={"auto"}
    >
      <Flex flexWrap={"wrap"} px={{ base: 4, md: 10, lg: 20 }} gap={6} pb={20}>
        {cardsData.map((data, index) => (
          <Box
            maxW={"256px"}
            key={index}
            mx={"auto"}
            boxShadow={"0 0 5px"}
            bgColor={"primary"}
          >
            <Image src={data.image} alt={data.title} />
            <Box
              p={5}
              bgColor={"primary"}
              color={"white"}
              boxSizing="border-box"
            >
              <Heading
                fontSize={{ base: "medium", md: "large" }}
                fontWeight={700}
                pb={2}
              >
                {data.title}
              </Heading>
              <Text boxSizing="border-box" fontSize={"small"}>
                {data.desc}
              </Text>
              <Flex justifyContent={"start"} py={"2"}>
                <Button
                  bgColor={"btnPrimary"}
                  fontSize={"small"}
                  px={3}
                  py={2}
                  borderRadius={"3px"}
                  color={"white"}
                  _hover={{ bg: "white", color: "btnPrimary" }}
                >
                  Add to cart
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Occasions;
