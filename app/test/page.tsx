"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useReactTable } from "@tanstack/react-table";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getData(): Promise<any> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getChampions(): Promise<any> {
  try {
    const res = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/14.20.1/data/en_US/tft-champion.json"
    );
    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getChampionImage(champion: string): Promise<any> {
  try {
    const res = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${champion}.png`
    );
    const blob = await res.blob();
    console.log(blob);
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(error);
    return "";
  }
}

async function getAugments(): Promise<any> {
  try {
    const res = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/14.20.1/data/en_US/tft-augments.json"
    );
    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getMyAccount(): Promise<any> {
  try {
    // no framework
    // const region = "asia";
    // const gameName = "Maestro";
    // const tagLine = "8662";
    // const key = "RGAPI-7d04ccc8-35c1-4c2f-8de8-c3169f07a552";
    // console.log("api key: ", key);
    // const reqUrl = `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
    // console.log("reqUrl: ", reqUrl);
    // const res = await fetch(reqUrl, {
    //     mode: "no-cors",
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept-Language": "en-US",
    //         "X-Riot-Token": key,
    //     },
    // });
    // console.log(res);
    // const json = await res.json();
    // console.log(json);
    // return json;
  } catch (error) {
    console.log("Error fetching summoner info: ", error);
  }
}

export default function Comps() {
  const [data, setDatas] = useState<any[]>([]);

  const [account, setAccount] = useState<any[]>([]);
  const [champions, setChampions] = useState<any>();
  const [augments, setAugments] = useState<any[]>([]);

  const [championImages, setChampionImages] = useState<any>("");

  const version = "14.20.1";

  useEffect(() => {
    getChampions().then((data) => {
      setChampions(data)
      console.log(data);
    });
    getMyAccount().then((data) => setAccount(data));
    getAugments().then((data) => setAugments(data));

    getData().then((data) => setDatas(data));

    getChampionImage("Ahri").then((data) => setChampionImages(data));
    
    console.log(championImages);
  }, []);

  return (
    <div className="bg-slate-700 w-full xl:w-[1080px] lg:p-5 min-h-[100vh-360px] mx-auto mt-24">
      {/* <DataTable columns={columns} data={data}></DataTable> */}

      Load champion championImages
      <img width="48px" src={championImages} alt="ahri"/>
      
      Load champion data
      <div className="flex flex-wrap gap-2">
        {champions && Object.keys(champions.data).map((champion) => (
          <div className="flex flex-col items-center" key={champion}>
            <p>{champion}</p>
            <img width="48px" src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/tft-champion/${champion}.png`} alt={champion}/>
            {/* <img width="48px" src={`https://ap.tft.tools/img/s12up/face/TFT12_${champion}.jpg?w=24`} alt={champion}/> */}
          </div>
        ))}
      </div>
      
    </div>
  );
}
