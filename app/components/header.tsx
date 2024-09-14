import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex w-full lg:w-lg justify-between items-center p-8">
            <h1 className="text-2xl font-bold">
                <Link href="/">Header</Link>
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/comps">Comps</Link>
                    </li>
                    <li>
                        <Link href="/team-builder">Builder</Link>
                    </li>
                    <li>
                        <Link href="/tables">Info Tables</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}