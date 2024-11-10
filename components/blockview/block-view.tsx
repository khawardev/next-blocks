import React from 'react';
import { Feature01 } from '../blocks/features/feature1';
import { BlurDelay, BlurDelay2 } from '../blur';

const BlockView = ({ blockName }: { blockName: string }) => {
    const componentsMap: { [key: string]: React.ReactNode } = {
        'feature-01': <BlurDelay2><Feature01 /></BlurDelay2>,
    };
    return (
        <div className=' flex-center h-screen'>
            {componentsMap[blockName]}
        </div>
    );
}

export default BlockView;
