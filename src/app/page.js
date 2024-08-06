'use client';
import styles from './page.module.css';
import HomeTopSlider from './Components/HomeTopSlider/HomeTopSlider';
import FeatureCard from './Components/FeatureCard/FeatureCard';
import SinglePromptCard from './Components/SinglePromptCard/SinglePromptCard';
import SimpleSlider from './Components/SimpleSlider/SimpleSlider';
import Slider from './Components/Slider/Slider';
import AnimatedHeading from './Components/(liteComponents)/AnimatedHeading/AnimatedHeading';
import ItemTopList from './Components/ItemTopList/ItemTopList';
import TopItemSingleList from './Components/TopItemSingleList/TopItemSingleList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './Components/(liteComponents)/Loading/Loading';
// import Loading from './(Pages)/Loading';

export default function Home() {
  const [dallprompt, setDallPrompt] = useState(null);
  const [trendingPrompt, settrendingPrompt] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/get`);
        const getTrendingPrompt = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/filter?status=active&&status=paused`)
        setDallPrompt(response.data);
        settrendingPrompt(getTrendingPrompt.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  if (!dallprompt || !trendingPrompt) {
    return <Loading />
  }
  return (
    <div className={styles.mainContainer}>
      {/* Top slider */}
      <HomeTopSlider />

      {/* FeatureCard slider */}
      <AnimatedHeading title="Featured Prompts" />
      <Slider component={FeatureCard} data={dallprompt} />

      {/* prompts */}
      <AnimatedHeading title="Trending Prompts" />
      <div className={styles.allPromptsContainer}>

        {trendingPrompt.map((item) => (
          <SinglePromptCard image={item.Image_Url[0]} label={item.promptType} title={`${item.title.slice(0, 18)} . . .`} price={item.price} link={`/dallprompt/${item._id}`} />
        ))}
      </div>


      {/* Item top list */}
      {/* <ItemTopList mainComponent={<Slider component={TopItemSingleList} data={dallprompt} />} /> */}

      {/* Hire Card slider */}
      {/* <Slider component={FeatureCard} data={dallprompt} /> */}

      {/* Featured prompts */}
      {/* <AnimatedHeading title="Featured Prompts" />
      <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Newest prompts */}
      {/* <AnimatedHeading title="Newest Prompts" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Most popular prompt bundles */}
      {/* <AnimatedHeading title="Most Popular Prompts Bundles" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Build an app slider */}
      {/* <SimpleSlider /> */}

      {/* Art & Illustration prompts */}
      {/* <AnimatedHeading title="Art & Illustration Prompts" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Logo & Icon prompts */}
      {/* <AnimatedHeading title="Logo & Icon Prompts" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Portrait Photography prompts */}
      {/* <AnimatedHeading title="Portrait Photography Prompts" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Build an app slider */}
      {/* <SimpleSlider /> */}

      {/* Pattern prompts */}
      {/* <AnimatedHeading title="Pattern Prompts" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Sticker prompts */}
      {/* <AnimatedHeading title="Sticker Prompts" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* T-shirt Print prompts */}
      {/* <AnimatedHeading title="T-shirt Print Prompts" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Poster Print prompts */}
      {/* <AnimatedHeading title="Poster Print Prompts" /> */}
      {/* <Slider component={SinglePromptCard} data={dallprompt} /> */}

      {/* Explore the App Store slider */}
      {/* <SimpleSlider /> */}
    </div>
  );
}
