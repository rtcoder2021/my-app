import React from 'react'
import { HStack, Input, Button } from '@chakra-ui/react'
function AddTodo() {
    function handleSubmit(event) {

    }
  return (
    <form>
        <HStack>
            <Input />
            <Button>Add Todo</Button>

        </HStack>
    </form>
  )
}

export default AddTodo
