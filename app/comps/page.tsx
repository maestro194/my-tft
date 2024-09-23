import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

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

async function getData(): Promise<any> {
    let data = await fetch('https://api.vercel.app/blog')
    let posts = await data.json()
    return posts;
}

export default function Comps() {
    let posts = getData();

    return (
        <div className="bg-slate-600 w-full xl:w-[1080px] lg:p-5 min-h-[100vh-360px] mx-auto mt-24">
            <Table>
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
            </Table>
        </div>
    );
}