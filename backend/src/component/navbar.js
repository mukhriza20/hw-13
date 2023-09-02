import React from "react";
import { 
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack 
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return(
        <Box
            as="section"
            pb={{
                base: '12',
                md: "0"
            }}
        >
            <Box as="nav" bg="teal" boxShadow="sm" p={5}>
                <HStack spacing="10" justify="space-between" justifyContent="flex-start">
                <Flex justify="space-between" flex="0">
                    <ButtonGroup variant="link" spacing="8">
                        <Button onClick={(e) => navigate("/")} color="white">Home</Button>
                        <Button onClick={(e) => navigate("/Add")} color="white">Add</Button>
                        <Button onClick={(e) => navigate("/Upload")} color="white">Upload</Button>
                    </ButtonGroup>
                </Flex>

                </HStack>   
            </Box>
        </Box>
    )
}

export default Navbar;