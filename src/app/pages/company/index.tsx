import Image from "next/image";
import zoom from "@/app/assets/company/zoom.png";
import dropbox from "@/app/assets/company/drobbox.png";
import slack from "@/app/assets/company/slack.png";
import spotify from "@/app/assets/company/spotify.png";
import webflow from "@/app/assets/company/webflow.png";
import coinbase from "@/app/assets/company/coinbase.png";

import React from 'react'

const Company = () => {
  return (
    <div className="bg-white py-12">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
    <Image src={coinbase} alt="Coinbase" className="w-auto h-12 md:h-16 object-contain" />
    <Image src={spotify} alt="Spotify" className="w-auto h-12 md:h-16 object-contain" />
    <Image src={slack} alt="Slack" className="w-auto h-12 md:h-16 object-contain" />
    <Image src={dropbox} alt="Dropbox" className="w-auto h-12 md:h-16 object-contain" />
    <Image src={webflow} alt="Webflow" className="w-auto h-12 md:h-16 object-contain" />
    <Image src={zoom} alt="Zoom" className="w-auto h-12 md:h-16 object-contain" />
  </div>
</div>

  )
}

export default Company
