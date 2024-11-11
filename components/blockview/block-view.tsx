import React from 'react';
import { Feature01 } from '../blocks/features/feature1';
import { BlurDelay } from '../blur';
import Hero01 from '../blocks/heros/hero1';
import Hero02 from '../blocks/heros/hero2';

const BlockView = ({ blockName }: { blockName: string }) => {
    const componentsMap: { [key: string]: React.ReactNode } = {
        'feature-01': <BlurDelay><Feature01 /></BlurDelay>,
        'hero-01': <BlurDelay><Hero01 /></BlurDelay>,
        'hero-02': <BlurDelay><Hero02 /></BlurDelay>,
    };

    return (
        <div>
            {componentsMap[blockName]}
        </div>
    );
}

export default BlockView;
