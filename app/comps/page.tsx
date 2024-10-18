"use client"

import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
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
} from "@/components/ui/table"  
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

    useEffect(() => {
        getMyAccount().then(data => setAccount(data));
    }, [true]);

    useEffect(() => {
        getData().then(data => setDatas(data));
    }, [true]);

    return (
        <div className="bg-slate-700 w-full xl:w-[1080px] lg:p-5 min-h-[100vh-360px] mx-auto mt-24">
            <DataTable columns={columns} data={data}>

            </DataTable>

            {/* <Table>
                <TableCaption>Team Comps</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableCell>Champion</TableCell>
                        <TableCell>Games</TableCell>
                        <TableCell>Rate</TableCell>
                        <TableCell>Place</TableCell>
                        <TableCell>Top %</TableCell>
                        <TableCell>Win %</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map((post: { id: any, title: any }) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>{Math.round((4 + Math.random() % 1) * 100) / 100}</TableCell>
                            <TableCell>{Math.round((4 + Math.random() % 1) * 100) / 100}</TableCell>
                            <TableCell>{Math.round((4 + Math.random() % 1) * 100) / 100}</TableCell>
                            <TableCell>50%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table> */}
        </div>
    );
}