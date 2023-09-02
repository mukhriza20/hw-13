import React , {useState} from "react";
import { 
    Flex ,
    Center,
    Input,
    Button,
    FormLabel,
    Stack,
} from "@chakra-ui/react";
import axios from "../axios.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



function Login() {
    let [Username, setUsername]= useState("");
    let [Password, setPassword]= useState("");
    let navigate = useNavigate();

    const handleSubmit = () => {
        console.log(Username);
        console.log(Password);

        axios({
            method: " POST",
            url: "/login",
            data: {
                Username,
                Password
            }
        })
            .then(response => {
                const {accessToken} =   response.data
                localStorage.setItem("access_Token", accessToken);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/");

            })
            .catch(err => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'failure',
                    title: 'login failed',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        
}

    return(
        <>
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center" background="yellow.100">
            <Center>
                <Stack spacing={5}>
                <FormLabel>Username</FormLabel>
                <Input type="text" onChange={(e) => setUsername(e.target.value)}/>
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleSubmit} bg="teal">Submit</Button>
                </Stack>
            </Center>
        </Flex>
        </>
    )
}
export default Login;