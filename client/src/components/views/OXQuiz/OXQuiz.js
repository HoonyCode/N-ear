import React from 'react';

const OXQuiz = () => {

    const iframepart = () => {
        return {
            __html: '<iframe height="965" width="1920" flex-justify-content: "center" frameborder="0" scrolling="no" src="test1.html" width="100%" heigth="100%"</iframe>',
        };
    };
  
    return (
        <div
            style={{ margin: 'auto', position: 'relative', width:'100%', height: '100%', overflow:'hidden'
        }}
        dangerouslySetInnerHTML={iframepart()}
        />
    );
};

export default OXQuiz;
