import React, { useState } from 'react';
import useKey from 'use-key-hook';
import ReactEmbedGist from 'react-embed-gist';

const component = (props) => {
    const [key1, setKey1] = useState(0);
    const [key2, setKey2] = useState(0);
    const [key3, setKey3] = useState(0);

    useKey(() => {
        setKey1(key1 => key1 + 1);
    }, {
            detectKeys: ['g']
        });
    useKey(() => {
        setKey2(key2 => key2 + 1);
    }, {
            detectKeys: [27]
        });
    useKey(() => {
        setKey3(key3 => key3 + 1);
    }, {
            detectKeys: [53]
        });
    return (
        <>
            <h1> Press <kbd> g </kbd>, <kbd> Esc</kbd> or  <kbd> 5</kbd></h1>

            {/* <h2 className="cover-heading">to trigger the Hook.</h2> */}
            <h3 className=""><span className="">g was pressed:</span> <span>{key1}</span> times</h3>
            <h3 className=""><span className="">Esc: </span> <span>{key2}</span> times</h3>
            <h3 className=" "><span className=""> 5 :</span> <span>{key3}</span> times</h3>
    <p> In this example tracking only 3 keys. You can track any number of keys.
        </p>
        {/* <Gist id='00bde27b269326ab4020acb52d1a541b' file='Chef-Dockerfile' /> */}
        <div className="container">
        <div className="row justify-content-md-center">
        <div className="col-md-8 col-lg-6">
        <ReactEmbedGist gist="haldarmahesh/78c1ebcfc5250a58b0711257e75897a7"/>
        
        </div>
        </div>
        </div>
        </>
    );
};
export default component;