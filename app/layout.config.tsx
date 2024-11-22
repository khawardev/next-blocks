import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: 'Next Blocks Docs',
    },
    links: [
        {
            text: 'Documentation',
            url: '/docs',
            active: 'nested-url',
        },
    ],
};
