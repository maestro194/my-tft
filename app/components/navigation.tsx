import Link from 'next/link';

export default function Navigation() {
    return (
        <div className="w-full bg-[--primary-3]">
            <nav className='flex w-full justify-between items-center mx-auto lg:w-[1080px]'>
                <div className='duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center'>
                    <ul className="flex flex-col md:flex-row md:items-center">
                        <li className='text-[--primary-12] bg-[--primary-3] hover:text-[--primary-11a] p-5'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='text-[--primary-12] bg-[--primary-3] hover:text-[--primary-11a] p-5'>
                            <Link href="/comps">Comps</Link>
                        </li>
                        <li className='text-[--primary-12] bg-[--primary-3] hover:text-[--primary-11a] p-5'>
                            <Link href="/team-builder">Builder</Link>
                        </li>
                        <li className='text-[--primary-12] bg-[--primary-3] hover:text-[--primary-11a] p-5'>
                            <Link href="/tables">Info Tables</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}