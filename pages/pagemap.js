import React from 'react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../components/map'), {
    ssr: false
});

const PageMap = () => {
    return (
        <React.Fragment>
            <div>
                <div>
                    <MapWithNoSSR />
                </div>
            </div>
        </React.Fragment>
    )
}

export default PageMap