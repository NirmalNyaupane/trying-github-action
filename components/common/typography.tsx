import * as React from 'react';
export const Heading1 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

export const Heading2 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

export const Heading3 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}

export const Heading4 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    )
}