import React,{useState} from 'react';
import {FaCheckCircle} from 'react-icons/fa';

function Hero(){

    return(
        <div className="flex flex-wrap border-2 max-w-lg p-10">
            <div className="border-2 text-5xl font-extrabold pb-2">Better, Faster and Cheaper Cloud.</div>
            <p className="border-2 p-2 w-112">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
            </p>
            <div className="p-4 w-full">
            <button className=" border-4 rounded-full text-xl p-3">Get started</button>
            </div>
            <ul className="border-2 pt-4">
                <li className="inline-flex"><FaCheckCircle />&nbsp; Available in 7 Locations</li><br/>
                <li className="inline-flex"><FaCheckCircle />&nbsp; Premium Internet Backbone</li><br/>
                <li className="inline-flex"><FaCheckCircle />&nbsp; 99.99% Uptime SLA</li>
            </ul>
        </div>
    );
}

export default Hero;