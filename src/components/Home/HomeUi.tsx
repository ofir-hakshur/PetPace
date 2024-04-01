import React from 'react';
import {HomeResult} from '../../types/types';
import styled from 'styled-components/native';
import {Wellbeing} from './assets/Wellbeing';
import {DataCube} from './DataCube/DataCube';
import {PainIcon} from './assets/PainIcon';
import {PostureScoreIcon} from './assets/PostureScoreIcon';
import {SleepIcon} from './assets/SleepIcon';
import {RespirationIcon} from './assets/RespirationIcon';
import {HrvIcon} from './assets/HrvIcon';
import {FeverIcon} from './assets/FeverIcon';
import {PulseIcon} from './assets/PulseIcon';

interface Props {
  data: HomeResult;
}
export const HomeUi = ({}: Props) => {
  return (
    <Container>
      <Section>
        <Header>
          <Title>Health</Title>
          <Line />
        </Header>
        <DataContainer>
          <DataCube title="Wellbeing" bigNumber={87} percentChange={3}>
            <Wellbeing />
          </DataCube>
          <DataCube title="Pain" bigNumber={74} percentChange={4}>
            <PainIcon />
          </DataCube>
          <DataCube title="Posture Score" bigNumber={87} percentChange={3}>
            <PostureScoreIcon />
          </DataCube>
          <DataCube title="Sleep" bigNumber={87} percentChange={3}>
            <SleepIcon />
          </DataCube>
        </DataContainer>
      </Section>
      <Section>
        <Header>
          <Title>Vitals</Title>
          <Line />
        </Header>
        <DataContainer>
          <DataCube title="Respiration" bigNumber={87} percentChange={3}>
            <RespirationIcon />
          </DataCube>
          <DataCube title="HRV" bigNumber={87} percentChange={3}>
            <HrvIcon />
          </DataCube>
          <DataCube title="Fever" isFever>
            <FeverIcon />
          </DataCube>
          <DataCube title="Pulse" bigNumber={87} percentChange={3}>
            <PulseIcon />
          </DataCube>
        </DataContainer>
      </Section>
    </Container>
  );
};

const Container = styled.View`
  gap: 16px;
  align-items: center;
  padding: 0 22px;
`;

const Section = styled.View`
  gap: 24px;
  align-items: center;
`;

const Header = styled.View`
  flex-direction: row;
  width: 344px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: #363636;
  opacity: 0.5;
  width: 50px;
`;

const Line = styled.View`
  height: 1px;
  flex: 1;
  background-color: #363636;
  opacity: 0.3;
`;

const DataContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
`;
