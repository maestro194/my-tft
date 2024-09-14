import Header from "../components/header";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
    return (
        <div className="flex w-auto max-w-1/2 justify-center items-center flex-col">
            <Header />
            Test: This is the dashboard page

            <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-md p-2 m-2 w-full"
            />

            <Button>Submit</Button>
        </div>
    );
}