'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Feed from "./Feed";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [articles01Net, setArticles01Net] = useState([]);
  const [articlesWelcome, setArticlesWelcome] = useState([]);

  const getArticlesFrom01Net = async () => {
    try{
        const res = await axios.get("https://rss-app-backend.vercel.app/net");
        setArticles01Net(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getArticlesWelcomeTo = async () => {
    try{
        const res = await axios.get("https://rss-app-backend.vercel.app/welcometo");
        setArticlesWelcome(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const getArticlesFromActusGaming = async () => {
    try{
        const res = await axios.get("https://rss-app-backend.vercel.app/");
        
        setArticles(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArticlesFromActusGaming()
    getArticlesFrom01Net()
    getArticlesWelcomeTo()
  }, [])


  
  return (
    <>
    <h1 className="text-xl font-semibold text-center mt-5">RSS app</h1>
     <h2 className="text-3xl font-semibold text-center mt-2 mb-4">Good morning, Stephane</h2>
    <div className="flex">
      <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
     <div className="bg-black flex flex-col items-center rounded-lg py-2 mb-5 px-6 w-[300px] mx-auto">
      <img src="	https://www.actugaming.net/wp-content/themes/actugaming/dist/img/layout/logo-dv.svg" alt="logo" />
     </div>
     {articles.map((item, i) =>
      <div key={i} className="my-10 bg-slate-100 p-2 rounded-lg">
      <Feed 
        title={item.item.title}
        link={item.item.link}
        date={item.item.pubDate}
      />
      </div>
     )}
     </div>
     <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
     <div className="bg-black flex flex-col items-center rounded-lg py-2 mb-5 px-6 w-[300px] mx-auto">
      <img src="https://www.01net.com/app/themes/01net/public/images/logo-01net.svg
" alt="logo" />
     </div>
     {articles01Net.map((item, i) => 
     <div key={i} className="my-10 bg-slate-100 p-2 rounded-lg">
      <Feed 
        title={item.item.title}
        link={item.item.link}
        date={item.item.pubDate}
      />
      </div>
     )}
     </div>
     <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
     <div className=" flex flex-col items-center rounded-lg py-2 mb-5 px-6 w-[300px] mx-auto">
      <img src="	https://cdn.welcometothejungle.com/wttj-front/production/assets/images/logos/wttj.svg

" alt="logo" />
     </div>
     {articlesWelcome.map((item, i) => 
     <div key={i} className="my-10 bg-slate-100 p-2 rounded-lg">
      <Feed 
        title={item.item.title}
        link={item.item.link}
        date={item.item.pubDate}
      />
      </div>
     )}
     </div>
    </div>
     
     
    </>
  );
}
