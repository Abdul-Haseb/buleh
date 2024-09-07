import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Delivery = () => {
  return (
    <Flex
      maxW={"1440px"}
      mx={"auto"}
      px={{ base: 4, md: 10, lg: 20 }}
      pt={{ base: 10, md: 20 }}
      pb={{ base: 20, md: 32 }}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 5, md: 10 }}
    >
      <Box flex={"1"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Image src="/images/clapham.png" />
          </GridItem>

          <GridItem>
            <Image src="/images/london.png" />
          </GridItem>

          <GridItem>
            <Image src="/images/bermingham.png" />
          </GridItem>

          <GridItem>
            <Image src="/images/battersea.png" />
          </GridItem>
        </Grid>
      </Box>
      <Box flex={"1"} color={"#012269"}>
        <Heading
          size={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight={800}
          pb={4}
        >
          Delivery Areas
        </Heading>
        <Text as={"p"}>
          serving delightful mornings across the UK! Whether you`re nestled in
          the heart of London, enjoying the coastal breeze in Brighton, or
          relishing the countryside charm in the Cotswolds, we`ve got you
          covered. Our delivery areas span the length and breadth of the UK,
          ensuring that wherever you call home, you can wake up to a sumptuous
          breakfast experience. From bustling cities to tranquil villages, our
          team is dedicated to bringing you the perfect start to your day, right
          to your doorstep.
        </Text>
      </Box>
    </Flex>
  );
};

export default Delivery;
