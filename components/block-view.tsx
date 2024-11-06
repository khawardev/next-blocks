import React from 'react';
import { Feature01 } from './allBlocks/features/feature1';

const BlockView = ({ blockName }: { blockName: string }) => {
    const componentsMap: { [key: string]: React.ReactNode } = {
        'feature-01': <Feature01 />,
    };
    return (
        <div className=' flex-center h-screen'>
            {componentsMap[blockName]}
        </div>
    );
}

export default BlockView;
