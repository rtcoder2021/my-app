import { HStack, VStack, Text, IconButton, StackDivider, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

function TodoList() {
  const todos = [
    { id: '1', body: 'Get Bread' },
    { id: '2', body: 'Get Milk' },
  ];
  return (
    <VStack divider={<StackDivider />} 
    borderColor='gray.100'
    borderWidth={'2px'}
    padding='4'
    borderRadius={'lg'} 
    width={'100%'}
    maxWidth={{base: '90vw', sm: '80vw', lg: '50vw', xl:'40vw'}}
    alignItems={'stretch'}>
      {todos.map(todo => (
        <HStack>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} isRound='True' />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
