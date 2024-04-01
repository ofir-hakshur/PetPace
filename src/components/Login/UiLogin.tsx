import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components/native';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  handleLogin: () => void;
}
export const UiLogin = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}: Props) => {
  return (
    <Container>
      <Input value={email} onChangeText={setEmail} placeholder="Email" />
      <Input
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <SubmitButton
        onPress={handleLogin}
        isDisable={!email || !password}
        disabled={!email || !password}>
        <LoginText>Login</LoginText>
      </SubmitButton>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100%;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  font-size: 24px;
`;

const SubmitButton = styled.TouchableOpacity<{isDisable: boolean}>`
  width: 150px;
  height: 50px;
  background-color: aqua;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  opacity: ${({isDisable}) => (isDisable ? 0.3 : 1)};
`;

const LoginText = styled.Text`
  font-size: 24px;
`;
