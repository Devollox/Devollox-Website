import './notFound.sass'
import {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'Not Found',
    description: 'Not Found',
}
export default function NotFound() {
    return (
        <main>
            <div className='main_container'>
                <div className='notfound'>
                    <div className='notfound-page'>
                        <a>404</a>
                        <div className='title-info'>Sorry, we were unable to find that page</div>
                        <div className='redirect'>Start from <a href='/' className='found-page'>home page</a></div>
                    </div>
                </div>
            </div>
        </main>
    )
}