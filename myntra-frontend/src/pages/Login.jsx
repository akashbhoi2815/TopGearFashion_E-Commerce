import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/authReducer/action';
import { useNavigate, Link, useLocation } from "react-router-dom";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const currentUser =  useSelector((store)=>store.authReducer.currentUser)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const comingFrom = location.state?.from?.pathname || '/'
  // console.log('comingFrom: ', comingFrom);
  const { email, password  } = state;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(state)).then((data)=>{
      // console.log("data",data.payload.data.message)
      if(data?.payload?.data?.message === "Login Successfull"){
        navigate(comingFrom, {replace:true})
     }
    })
    // setState({email:"",password:""})
   
  };

  return (
    <Box  border={"1px solid teal"}>
    <Flex
      border={"1px solid red"}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            To enjoy our cool website ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit} >
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input 
                  type="email"
                  placeholder=""
                  name="email"
                  value={email}
                  onChange={handleOnchange}
                  required
               />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input 
                type={showPassword ? 'text' : 'password'} 
                placeholder=""
                name="password"
                value={password}
                onChange={handleOnchange}
                required/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
               <Input
                  type="submit"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                      bg: 'blue.500',
                  }}
                  value="Login"
                />
            </Stack>
            </form>
            <Stack pt={6}>
              <Text align={'center'}>
                If You Don't Have Account? <Link color={'blue.400'} to="/signup">Signup</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  );
}