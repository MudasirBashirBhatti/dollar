'use client'
import Filter from '@/app/Components/Filter/Filter';
import styles from '@/app/(Pages)/market/market.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePromptCard from '@/app/Components/SinglePromptCard/SinglePromptCard';
import Loading from '@/app/Components/(liteComponents)/Loading/Loading';
import { useRouter } from 'next/navigation';
import PromptFilterMobile from '@/app/Components/PromptFilterMobile/PromptFilterMobile';

const page = () => {
  const router = useRouter();
  const [promptData, setPromptData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:4001/api/prompt/dalle/get');
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/get`);

        setPromptData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(promptData)
  if (!promptData) {
    return <Loading />
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterComponent}><Filter /></div>
      <div className={styles.mobileFilterComponent}><PromptFilterMobile /></div>
      <div className={styles.leftContainer}>
        {promptData.map((item) => (
          <SinglePromptCard image={item.Image_Url[0]} label={item.promptType} title={`${item.title.slice(0, 18)} . . .`} price={item.price} link={`/dallprompt/${item._id}`} />
        ))}
      </div>
    </div>
  );
};

export default page;
