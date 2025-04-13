import React from 'react';
import { BlurDelay } from '../blur';
import Hero01 from '../blocks/heros/hero1';
import Hero02 from '../blocks/heros/hero2';
import Hero3 from '../blocks/heros/hero3';
import Hero4 from '../blocks/heros/hero4';
import { Feature01 } from '../blocks/features/feature1';
import { Feature02 } from '../blocks/features/feature2';
import Header01 from '../blocks/headers/header1';
import Footer01 from '../blocks/footer/footer1';
import Faq01 from '../blocks/faq/faq1';
import Blog01 from '../blocks/blogs/blog1';

const BlockView = ({ blockName }: { blockName: string }) => {
    const componentsMap: { [key: string]: React.ReactNode } = {
        'hero-01': <BlurDelay><Hero01 /></BlurDelay>,
        'hero-02': <BlurDelay><Hero02 /></BlurDelay>,
        'hero-03': <BlurDelay><Hero3 /></BlurDelay>,
        'hero-04': <BlurDelay><Hero4 /></BlurDelay>,
        'feature-01': <BlurDelay><Feature01 /></BlurDelay>,
        'feature-02': <BlurDelay><Feature02 /></BlurDelay>,
        'header-01': <BlurDelay><Header01 /></BlurDelay>,
        'footer-01': <BlurDelay><Footer01 /></BlurDelay>,
        'faq-01': <BlurDelay><Faq01 /></BlurDelay>,
        'blog-01': <BlurDelay><Blog01 /></BlurDelay>,
    };

    return (
        <div>
            {componentsMap[blockName]}
        </div>
    );
}

export default BlockView;
