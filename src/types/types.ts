export interface AuthResult {
  payload: {
    token: {
      expiresInSeconds: number;
      token: string;
    };
  };
}

interface InnerData {
  currentData: number;
  normalRange: {
    normalRangeMaxValue: number | null;
    normalRangeMinValue: number | null;
  } | null;
  changePercentage: number | null;
}

export interface HomeResult {
  payload: {
    healthIndexDailyTrend: InnerData; //problem - currentData no have, changePercentage from where?
    oaDailyTrend: InnerData; //problem - currentData no have, changePercentage from where?
    positionScoreDailyTrend: InnerData; //problem - currentData is an object
    sleepDailyTrend: InnerData;
    respirationDailyTrend: InnerData;
    vvtiDailyTrend: InnerData;
    feverIndication: InnerData;
    PulseDailyTrend: InnerData;
  };
}
