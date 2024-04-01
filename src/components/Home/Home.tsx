import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {HomeResult} from '../../types/types';
import {UiModal} from './UiModal/UiModal';
import {HomeUi} from './HomeUi';

interface Props {
  token: string;
}

export const Home = ({token}: Props) => {
  const [data, setData] = useState<HomeResult>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        'https://apiv2.pp-srv.com/pet/dashboard/trends/summary/1310',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const serverData: HomeResult = await res.json();
      setData(serverData);
    };
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      setIsModalOpen(true);
    }
  }, [data]);

  return (
    <>
      {isModalOpen && <UiModal closeModal={() => setIsModalOpen(false)} />}
      {!data ? <ActivityIndicator size="large" /> : <HomeUi data={data} />}
    </>
  );
};
