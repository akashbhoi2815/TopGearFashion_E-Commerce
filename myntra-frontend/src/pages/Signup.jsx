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
import { signup } from '../redux/authReducer/action';
import { useNavigate, Link } from "react-router-dom";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({
    name: "",
    mobile:"",
    gender:"",
    email: "",
    password: "",
  });

  const currentUser =  useSelector((store)=>store.authReducer.currentUser)
  // console.log('currentUser: ', currentUser);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, password , mobile , gender } = state;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(state))
    setState({email:"",password:"",name:"",mobile:"",gender:""})
   
  };






  return (
    <Box>
      <Flex
      m={"auto"}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
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
            <form onSubmit={handleSubmit}>
             <FormControl id="firstName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input 
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={name}
                        onChange={handleOnchange}
                        required 
                        />
             </FormControl>

             <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input  
                        type="Number"
                        placeholder="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={handleOnchange}
                        required />
             </FormControl>

             <FormControl id="gender" isRequired>
             <FormLabel>Gender</FormLabel>
             <Select name="gender" onChange={handleOnchange} placeholder="Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
             </Select>
             </FormControl>

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
                  value="Sign up"
                />
            </Stack>
            </form>
            
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} to="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  );
}