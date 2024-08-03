"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useFractions = () => {
    const [fractionsList, setFractionsList] = useState([]);

    useEffect(() => {
      getFraction();
    },[]);
  
    const getFraction = () => {
      GlobalApi.getFraction().then((resp: { data: { data: any[] } }) => {
        console.log(resp.data.data);
        setFractionsList(resp.data.data as never[]);
      });
    }

    return fractionsList;
}
export default useFractions;