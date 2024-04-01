import React, {PropsWithChildren} from 'react';
import styled from 'styled-components/native';
import {ArrowUp} from '../assets/ArrowUp';
import {GreenCircle} from '../assets/GreenCircle';

interface Props extends PropsWithChildren {
  title: string;
  bigNumber?: number;
  percentChange?: number;
  bottomNumber?: number;
  isFever?: boolean;
}

export const DataCube = ({
  title,
  percentChange,
  bigNumber,
  isFever,
  children,
}: Props) => {
  return (
    <Container>
      <IconContainer>
        {children}
        <TitleText>{title}</TitleText>
      </IconContainer>
      {isFever ? (
        <GreenCircle />
      ) : (
        <NumbersContainer>
          <PercentRow>
            <ArrowUp />
            <PercentText>{percentChange}%</PercentText>
          </PercentRow>
          <BigNumber>{bigNumber}</BigNumber>
        </NumbersContainer>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  width: 134px;
  height: 71px;
  justify-content: space-between;
  align-items: flex-end;
`;

const IconContainer = styled.View`
  gap: 4px;
`;

const TitleText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #363636;
`;

const NumbersContainer = styled.View`
  align-items: flex-end;
`;

const PercentRow = styled.View`
  gap: 2px;
  flex-direction: row;
`;

const PercentText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #44389a;
`;

const BigNumber = styled.Text`
  font-size: 32px;
  font-weight: 300;
  color: #5abb81;
`;
