"use client";
import {
    MoonIcon,
    SunIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitcher = React.forwardRef<
    HTMLButtonElement,
    React.HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
    const { className, ...rest } = props;

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (

        <button
            ref={ref}
            {...rest}
            className={cn(
                " hover:bg-accent hover:text-accent-foreground  relative flex size-8 items-center justify-center overflow-hidden rounded-lg  p-2 transition-colors ",
                className,
            )}
            onClick={toggleTheme}
        >
            <motion.span
                className="absolute left-1/2"
                initial={{
                    transform: "translate(-50%, 150%)",
                }}
                animate={{
                    ...(theme === "dark"
                        ? { transform: "translate(-50%, 150%)" }
                        : { transform: "translate(-50%, 0%)" }),
                }}
            >
                <SunIcon className="size-4" />
            </motion.span>
            <motion.span
                className="absolute left-1/2"
                initial={{
                    transform: "translate(-50%, -150%)",
                }}
                animate={{
                    ...(theme === "dark"
                        ? { transform: "translate(-50%, 0%)" }
                        : { transform: "translate(-50%, -150%)" }),
                }}
            >
                <MoonIcon className="size-4" />
            </motion.span>
        </button>
    );
});
ThemeSwitcher.displayName = "ThemeSwitcher";

export { ThemeSwitcher };
