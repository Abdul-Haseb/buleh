const questions = [
  {
    question: "What can you do for breakfast-in-bed?",
    answer:
      "There are a lot of breakfast-in-bed ideas you can try. Popular options include biscuits, omelets, fancy oatmeal, and quiche.",
  },
  {
    question: "Is breakfast-in-bed romantic?",
    answer:
      "Breakfast-in-bed is definitely romantic. It`s a nice way to show your partner you care about them on Valentine`s Day or any other day of the year. Let your loved one sit back and relax while you prepare something special for them.",
  },
  {
    question: "What can you do for breakfast-in-bed?",
    answer:
      "If you`re looking for breakfast-in-bed recipes for Mother`s Day, you can`t go wrong with classic scones with cream and jam. An asparagus tart with poached eggs is also a nice option. Breakfast-in-bed is a thoughtful treat for someone who spends most of their time caretaking.",
  },
];

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { HideAnswer, ShowAnswer } from "../icons";

const Questions = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleShowAnswer = (getindex) =>
    setShowAnswer(getindex === showAnswer ? null : getindex);
  return (
    <Box
      maxW={"1440px"}
      mx={"auto"}
      height={"30%"}
      mb={20}
      px={{ base: 4, md: 10, lg: 20 }}
    >
      <Heading
        size={{ base: "2xl", md: "3xl" }}
        color={"primary"}
        fontWeight={700}
        textAlign={"center"}
        pb={10}
      >
        Frequently asked questions
      </Heading>
      <Box height={"250px"}>
        {questions.map(({ question, answer }, index) => (
          <Box key={index} p={2} borderBottom={"1px solid #6378A5"} pb={5}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text
                onClick={() => handleShowAnswer(index)}
                as={"p"}
                fontWeight={"600"}
                color={"primary"}
                fontSize={{ base: "medium", md: "larger", lg: "x-large" }}
              >
                {question}
              </Text>
              <Box onClick={() => handleShowAnswer(index)}>
                {showAnswer !== index ? <ShowAnswer /> : <HideAnswer />}
              </Box>
            </Flex>
            <Text color={"#6378A5"}>{showAnswer === index && answer}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Questions;
