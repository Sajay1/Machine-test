import React from "react";
import location from '../image/location-icon.png';
import image from '../image/image.png'


export default function Footer(){
return(
<footer className="bg-black border-t border-gray-700 py-8 text-center text-sm text-gray-400">
<div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-8">
  <div className="space-y-1">
  <div className="container border rounded relative">  
    <div>  <img src="{phone}" alt="Location" className="w-19 h-19"/>
    ‪+91 9435123456‬</div>
    <div>  <img src="{mail}" alt="Location" className="w-19 h-19"/>
    info@deepnetsoft.com</div>
    </div>
    <div className="container border rounded px-5 relative"> 
                  <img src={image} alt="Logo" className="h-10" />          
       <div className="text-blue-400 font-bold text-xl">DEEP NET SOFT</div>
    </div>
  </div>
  <div className="container border rounded px-5 rlative">           
  <div>
  <img src="{location}" alt="Location" className="w-19 h-19"/>
       For Front Gate, Ishwarpur, Ichapur, C.F.T, Kolkata
  </div>
  </div>
</div>
<div className="bg-gray">
 <p className="mt-6">© 2024 Deepnetsoft Solutions. All rights reserved.</p>
</div>
</footer>
)};

