import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const EyeIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  
  const handleClick = (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      // Thực hiện các hành động khi mật khẩu trùng khớp
      setPasswordMatch(true);
      // Tiếp tục xử lý đăng ký hoặc các hành động khác
    } else {
      // Thông báo lỗi hoặc thực hiện các hành động khác khi mật khẩu không trùng khớp
      setPasswordMatch(false);
    }
    register(dispatch, { name, lastname, username, password, email, confirmpassword });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input 
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          />
          <Input 
          placeholder="last name"
          onChange={(e) => setLastname(e.target.value)}
          />
          <Input 
          placeholder="username" 
          onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
          placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInputWrapper>
            <Input
            placeholder="password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            />
            <EyeIcon onClick={toggleShowPassword}>
              {showPassword ? <MdVisibility /> : <MdVisibilityOff  />}
            </EyeIcon>
          </PasswordInputWrapper>
          <PasswordInputWrapper>
            <Input 
            placeholder="confirm password"
            type={showPassword ? 'text' : 'password'} 
            onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <EyeIcon onClick={toggleShowPassword}>
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </EyeIcon>
          </PasswordInputWrapper>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
          {!passwordMatch && <Error>Passwords do not match!...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;