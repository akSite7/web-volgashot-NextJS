"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useBuckshots = () => {
    const [buckshotsList, setBuckshotsList] = useState([]);

    useEffect(() => {
      getBuckshot();
    },[]);
  
    const getBuckshot = () => {
      GlobalApi.getBuckshot().then((resp: { data: { data: any[] } }) => {
        console.log(resp.data.data)
        setBuckshotsList(resp.data.data as never[])
      });
    }

    return buckshotsList;
}
export default useBuckshots;