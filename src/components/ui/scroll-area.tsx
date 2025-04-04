"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import {cn} from "@/lib/utils";


interface IScrollArea {
    className?: string;
    dir?: "ltr" | "rtl";
    children: React.ReactNode;
}

const ScrollArea =
    ({className, children, dir = "ltr", ...props}: IScrollArea) => (
        <ScrollAreaPrimitive.Root
            dir={dir}
            className={cn("relative overflow-hidden", className)}
            {...props}
        >
            <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
                {children}
            </ScrollAreaPrimitive.Viewport>
            <ScrollBar/>
            <ScrollAreaPrimitive.Corner/>
        </ScrollAreaPrimitive.Root>
    );
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;


interface IScrollBar extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    orientation?: "vertical" | "horizontal";
}

const ScrollBar =
    ({className, orientation = "vertical", ...props}: IScrollBar) => (
        <ScrollAreaPrimitive.ScrollAreaScrollbar
            orientation={orientation}
            className={cn(
                "flex touch-none select-none transition-colors",
                orientation === "vertical" &&
                "h-full w-2.5 border-l border-l-transparent p-[1px]",
                orientation === "horizontal" &&
                "h-2.5 flex-col border-t border-t-transparent p-[1px]",
                className
            )}
            {...props}
        >
            <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-accent dark:bg-slate-800"/>
        </ScrollAreaPrimitive.ScrollAreaScrollbar>
    );
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export {ScrollArea, ScrollBar};
