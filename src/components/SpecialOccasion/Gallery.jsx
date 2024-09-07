import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Box
      maxW={"1440px"}
      mx={"auto"}
      px={{ base: 4, md: 10, lg: 20 }}
      pb={{ base: 20, md: 32 }}
    >
      <Heading
        size={{ base: "xl", md: "2xl", lg: "3xl" }}
        fontWeight={800}
        pb={4}
        color={"primary"}
      >
        Gallery
      </Heading>
      <Grid
        width={"100%"}
        templateColumns="repeat(3 ,auto)"
        alignItems={"center"}
        gap={6}
        justifyContent={"center"}
      >
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Image src="/images/gallery1.png" />
        </GridItem>
        <GridItem
          rowSpan={2}
          height={"100%"}
          display={{ base: "none", md: "block" }}
        >
          <Image src="/images/gallery2.png" />
        </GridItem>
        <GridItem>
          <Image src="/images/gallery3.png" />
        </GridItem>
        <GridItem>
          <Image src="/images/gallery4.png" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Gallery;
