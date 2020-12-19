import React from 'react';
import './Recommeded.css';
import VideoCard from './VideoCard';

function Recommeded() {
    return (
        <div className="recommeded">
            <h2> Recommended</h2>
            <div className="recommendedVideos__Videos">
                <VideoCard
                title="5 Reasons you MUST learn REACT in 2021!"
                views="2.5M Views"
                timestamp="3 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnibKAf8ZWlWiZs4CJ3lGbXzl8IfWfzVycMabPpJdHQ=s48-c-k-c0xffffffff-no-rj-mo" 
                channel="Sonny Sangha"
                image="http://i3.ytimg.com/vi/YwA7x2Py5DQ/hqdefault.jpg"    
                />
                <VideoCard
                title="AAJ DIN CHADHEYA (LYRICAL) || KARTIKAY"
                views="2.5M Views"
                timestamp="3 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnibKAf8ZWlWiZs4CJ3lGbXzl8IfWfzVycMabPpJdHQ=s48-c-k-c0xffffffff-no-rj-mo" 
                channel="Helo"
                image="http://i3.ytimg.com/vi/SM4Jrgyukhk/hqdefault.jpg"    
                />
                <VideoCard
                title="Luka Chuppi - Rang de Basanti - cover version"
                views="2.5M Views"
                timestamp="3 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhFVoRZMNbB75YD00ZiJEv5bvQVSwHTWi6bhvULT7k=s48-c-k-c0xffffffff-no-rj-mo" 
                channel="Nasiya hussain"
                image="http://i3.ytimg.com/vi/FAlR2CZZDTw/hqdefault.jpg"    
                />
                <VideoCard
                title="Luka Chuppi: Duniyaa Full Video Song | Kartik Aaryan Kriti Sanon | Akhil | Dhvani B"
                views="2.5M Views"
                timestamp="3 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniNTDIUibNIZwwUWC820n6i3yPz-rnBDwOpZED1CQY=s48-c-k-c0xffffffff-no-rj-mo" 
                channel="T-Series"
                image="http://i3.ytimg.com/vi/hVCYwwFwGEE/hqdefault.jpg"    
                />
                <VideoCard
                title="Luka Chuppi: Duniyaa Full Video Song | Kartik Aaryan Kriti Sanon | Akhil | Dhvani B"
                views="2.5M Views"
                timestamp="3 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniNTDIUibNIZwwUWC820n6i3yPz-rnBDwOpZED1CQY=s48-c-k-c0xffffffff-no-rj-mo" 
                channel="T-Series"
                image="http://i3.ytimg.com/vi/hVCYwwFwGEE/hqdefault.jpg"    
                />
                
            </div>
        </div>
    )
}

export default Recommeded
