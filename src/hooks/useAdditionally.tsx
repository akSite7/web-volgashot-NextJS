"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useAdditionally = () => {
    const [additionallyList, setAdditionallyList] = useState([]);

    useEffect(() => {
      getAdditional();
    },[]);
  
    const getAdditional = () => {
      GlobalApi.getAdditional().then((resp: { data: { data: any[] } }) => {
        console.log(resp.data.data);
        setAdditionallyList(resp.data.data as never[]);
      });
    }

    return additionallyList;
}

export default useAdditionally;