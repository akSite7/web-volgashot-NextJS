"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useOthers = () => {
    const [othersList, setOthersList] = useState([]);

    useEffect(() => {
      getOther();
    },[]);
  
    const getOther = () => {
      GlobalApi.getOther().then((resp: { data: { data: any[] } }) => {
        console.log(resp.data.data);
        setOthersList(resp.data.data as never[]);
      });
    }

    return othersList;
}
export default useOthers;