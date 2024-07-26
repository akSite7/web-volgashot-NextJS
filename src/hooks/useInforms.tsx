"use client"

import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useInforms = () => {
    const [informsList, setInformsList] = useState([]);

    useEffect(() => {
      getInform();
    },[]);
  
    const getInform = () => {
      GlobalApi.getInform().then((resp: { data: { data: any[] } }) => {
        console.log(resp.data.data);
        setInformsList(resp.data.data as never[]);
      });
    }

    return informsList;
}

export default useInforms;