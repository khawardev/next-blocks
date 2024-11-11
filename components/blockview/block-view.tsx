import React from 'react';
import { Feature01 } from '../blocks/features/feature1';
import { BlurDelay } from '../blur';

const BlockView = ({ blockName }: { blockName: string }) => {
    const componentsMap: { [key: string]: React.ReactNode } = {
        'feature-01': <BlurDelay><Feature01 /></BlurDelay>,
    };
    return (
        <div className=' flex-center h-screen'>
            {componentsMap[blockName]}
        </div>
    );
}

export default BlockView;
