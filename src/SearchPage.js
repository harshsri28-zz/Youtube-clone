import React from 'react';
import ChannelRow from './ChannelRow';
import "./SearchPage.css";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="http://i3.ytimg.com/vi/0V3QDpzZ21s/hqdefault.jpg"
            channel="Harsh Srivastava"
            verified
            subs="1000M"
            noOfVideos={382}
            description="My Story"
             />
             <hr />

             <VideoRow 
                 views="1.4M"
                 subs="1B"
                 description="Do you want free"
                 timestamp="59 second ago"
                 channel="Harsh Srivastava"
                 title="Lets build new world"
                 image="http://i3.ytimg.com/vi/gdojwO396uM/hqdefault.jpg"
             />
             <VideoRow 
                 views="1.4M"
                 subs="1B"
                 description="Do you want free"
                 timestamp="59 second ago"
                 channel="Harsh Srivastava"
                 title="Lets build new world"
                 image="http://i3.ytimg.com/vi/gdojwO396uM/hqdefault.jpg"
             />
             <VideoRow 
                 views="1.4M"
                 subs="1B"
                 description="Do you want free"
                 timestamp="59 second ago"
                 channel="Harsh Srivastava"
                 title="Lets build new world"
                 image="http://i3.ytimg.com/vi/gdojwO396uM/hqdefault.jpg"
             />
             <VideoRow 
                 views="1.4M"
                 subs="1B"
                 description="Do you want free"
                 timestamp="59 second ago"
                 channel="Harsh Srivastava"
                 title="Lets build new world"
                 image="http://i3.ytimg.com/vi/gdojwO396uM/hqdefault.jpg"
             />
             <VideoRow 
                 views="1.4M"
                 subs="1B"
                 description="Do you want free"
                 timestamp="59 second ago"
                 channel="Harsh Srivastava"
                 title="Lets build new world"
                 image="http://i3.ytimg.com/vi/gdojwO396uM/hqdefault.jpg"
             />
        </div>
    )
}

export default SearchPage
