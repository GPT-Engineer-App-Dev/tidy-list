import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack, HStack, IconButton, Spacer, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      toast({
        title: "Please enter a todo",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" margin="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Todo App
      </Heading>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input variant="filled" placeholder="Enter a todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <IconButton colorScheme="blue" type="submit" icon={<FaPlus />} aria-label="Add todo" />
        </HStack>
      </form>
      <VStack spacing={4} mt={8} align="stretch">
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Text>{todo}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} aria-label="Delete todo" onClick={() => deleteTodo(index)} />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
