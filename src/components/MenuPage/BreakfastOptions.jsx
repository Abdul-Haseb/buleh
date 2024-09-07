import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const cardsData = [
  {
    image: "/images/img.png",
    title: "Full English Breakfast",
    desc: "A hearty breakfast featuring two eggs cooked to your liking, accompanied by crispy bacon, savory sausage, grilled tomatoes, sautéed mushrooms, baked beans, and toast.",
    btn: "Add to cart",
  },
  {
    image: "/images/img.png",
    title: "Continental Breakfast",
    desc: "An elegant selection of freshly baked pastries, including croissants, pain au chocolat, and Danish pastries, served with a variety of jams, and honey. Accompanied by a fruit platter and yogurt.",
    btn: "Add to cart",
  },
  {
    heading: "Deluxe Breakfast Options",
    category: "Deluxe Breakfast Options",
    image: "/images/img.png",
    title: "Eggs Benedict",
    desc: "Poached eggs atop toasted English muffins, layered with Canadian bacon and smothered in creamy hollandaise sauce. Served with a side of crispy hash browns or roasted potatoes.",
    btn: "Add to cart",
  },
  {
    image: "/images/img.png",
    title: "Savory Quiche",
    desc: "Flaky pastry crust filled with a rich and creamy egg custard, loaded with a variety of savory fillings such as spinach, bacon, mushrooms, and cheese. Served with a side salad or roasted vegetables.",
    btn: "Add to cart",
  },
  {
    heading: "Breakfast and Breads",
    category: "Breakfast and breads",
    image: "/images/img.png",
    title: "Summer Berry Pancakes",
    desc: "Fluffy buttermilk pancakes studded with juicy summer berries, served with whipped cream and a drizzle of maple syrup. Accompanied by a refreshing fruit salad.",
    btn: "Add to cart",
  },
  {
    image: "/images/img.png",
    title: "Autumn Harvest Frittata",
    desc: "A colorful frittata bursting with seasonal vegetables such as butternut squash, Brussels sprouts, and kale, accented with creamy goat cheese. Served with crusty bread and roasted root vegetables.",
    btn: "Add to cart",
  },
];

const BreakfastOptions = () => {
  return (
    <Box
      maxW={"1440px"}
      mx={"auto"}
      mt={-240}
      zIndex={30}
      pos={"relative"}
      px={{ base: 4, md: 10, lg: 20 }}
      mb={20}
    >
      <Heading
        size={{ base: "md", md: "xl" }}
        color={"white"}
        py={10}
        textAlign={"center"}
      >
        Classic Breakfast Options
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        justifyContent={"space-between"}
        gap={6}
        rowGap={{ base: 12, md: 24 }}
        justifyItems={"center"}
      >
        {cardsData.map((data, index) => (
          <Flex position={"relative"} key={index} flexDir={"column"}>
            {data.heading && (
              <Heading
                size={{ base: "md", md: "xl" }}
                mt={{ base: "-8", md: "-14" }}
                textAlign={"center"}
                position={"absolute"}
                top={0}
                zIndex={40}
                color={"primary"}
              >
                {data.heading}
              </Heading>
            )}
            <Box
              key={index}
              maxW={{ base: "300px", md: "350px", lg: "570px" }}
              minH={{ base: "400px", md: "450px", lg: "500px" }}
              mx={{ base: "auto", md: 0 }}
              boxShadow={"0 0 5px"}
              bgColor={"primary"}
            >
              <Image src={data.image} alt={data.title} width={"100%"} />
              <Box
                p={6}
                bgColor={"primary"}
                color={"white"}
                boxSizing="border-box"
              >
                <Heading
                  fontSize={{ base: "medium", md: "large" }}
                  fontWeight={600}
                >
                  {data.title}
                </Heading>
                <Text boxSizing="border-box">{data.desc}</Text>
                <Flex justifyContent={"end"} py={"2"}>
                  <Button
                    bgColor={"btnPrimary"}
                    fontSize={"small"}
                    px={3}
                    py={2}
                    borderRadius={"3px"}
                    color={"white"}
                    _hover={{ bg: "white", color: "btnPrimary" }}
                  >
                    {data.btn}
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default BreakfastOptions;
