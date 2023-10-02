import * as React from 'react';
import Video from './Video';

interface pageProps {

}

const vid = "https://www.youtube.com/watch?v=LXb3EKWsInQ";

const page = () => {
    return (
      <Video videoSrc={vid} />
    );
};

export default page;
