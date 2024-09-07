import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const cardsData = [
  {
    image: "/images/smallimg1.png",
    title: "Chorizo Hash and Eggs",
    desc: "Crispy potatoes, smoky sausage, and baked eggs are an excellent start to the day. This epic breakfast feast is packed with spicy chorizo, green chilies, and topped with avocado.",
  },
  {
    image: "/images/smallimg2.png",
    title: "Quiche with hash brown crust",
    desc: "This oatmeal recipe features silky pumpkin, warming spices, and walnuts, but the star is fresh pomegranate seeds, adding sweet-tart flavor and a pop of pink.",
  },
  {
    image: "/images/smallimg3.png",
    title: " Stuffed French toast",
    desc: "Level up French toast with fillings like fruit, sweetened cream cheese, or even a chocolate spread. This French toast recipe is stuffed with homemade blackberry compote and dusted with powdered sugar that is reminiscent of a jelly doughnut",
  },
  {
    image: "/images/smallimg3.png",
    title: "Fancy oatmeal",
    desc: "This oatmeal recipe features silky pumpkin, warming spices, and walnuts, but the star is fresh pomegranate seeds, adding sweet-tart flavor and a pop of pink.",
  },
  {
    image: "/images/smallimg3.png",
    title: "Eggs Benedict",
    desc: "Homemade Eggs Benedict is always impressive, and it’s easier than you’d think. We use these clever, time-saving hacks for perfectly poached eggs and decadent hollandaise on-the-fly.",
  },
  {
    image: "/images/smallimg3.png",
    title: "Homemade granola",
    desc: "Freshly baked granola, yogurt, and seasonal fruit thoughtfully layered in a lovely glass can be special occasion-worthy. This turmeric and honey granola is beautifully spiced easy to make.",
  },
  {
    image: "/images/smallimg3.png",
    title: "Skillet omelet",
    desc: "The genius of skillet omelets is being able to pack in tons of delicious fillings without having to fold or flip. This one-pan wonder from the duo is full of flavor, looks beautiful, and is healthy to boot",
  },
];

const OtherDishes = () => {
  return (
    <>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        fontWeight={600}
        pb={4}
        color={"primary"}
        textAlign={"center"}
      >
        Other dishes
      </Heading>
      <Flex
        maxW={"1440px"}
        mx={"auto"}
        flexWrap={"wrap"}
        px={{ base: 4, md: 10, lg: 20 }}
        gap={6}
        pb={20}
      >
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
              p={3}
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
    </>
  );
};

export default OtherDishes;
