import Link from 'next/link';

export default function Sidebar() {
    console.log('Repaint Sidebar')
    return (
        <>
            <div className="lg:w-80 sm:w-44 lg:w-64 h-full bg-gray-600 fixed">
                <div className='flex flex-col'>
                    <Link href='/dashboard'>
                        <p className='p-4 border-b-[1.5px] hover:bg-gray-700 focus:outline-none'>Dashboard</p>
                    </Link>
                    <Link href='/currencyconverter'>
                        <p className='p-4 border-b-[1.5px] hover:bg-gray-700'>Currency Converter</p>
                    </Link>
                    <Link href='./chatwithAI'>
                    <p className='p-4 border-b-[1.5px] hover:bg-gray-700'>Chat with AI</p>
                    </Link>
                </div>
            </div>
        </>
    )
}