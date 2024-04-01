import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {DogImage} from './DogImage';

interface Props {
  closeModal: () => void;
}
export const UiModal = ({closeModal}: Props) => {
  return (
    <Modal isVisible backdropColor="#44389A" backdropOpacity={0.5}>
      <Container>
        <HeaderImage>
          <DogImage />
          <DataDetectedText>Data Detected</DataDetectedText>
        </HeaderImage>
        <NextButton onPress={closeModal}>
          <NextText>Next</NextText>
        </NextButton>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  height: 349px;
  height: 600px;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding-bottom: 24px;
  background-color: white;
`;

const HeaderImage = styled.View`
  align-items: center;
  gap: 16px;
`;

const DataDetectedText = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const NextButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 195px;
  height: 50px;
  border: solid #44389a;
`;

const NextText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #44389a;
`;
