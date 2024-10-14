'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: any) => {
    return (
        <>
            {children}
            <ProgressBar
                height="2px"
                color="hsl(var(--foreground))"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default Providers;