//Note: for client and server rendering

import React, { type HTMLProps, type ReactNode, type RefAttributes } from 'react';

import Link, { type LinkProps }  from 'next/link';

const DONT_PREFETCH = true;

/**
 * Next link properties.
 */
type NextLinkProps = {
    internal: boolean
    newTab?: boolean

    children: ReactNode;
} & LinkProps & RefAttributes<HTMLAnchorElement> & HTMLProps<HTMLAnchorElement>;

export default function NextLink({
    internal,
    newTab,
    children,
    prefetch,
    ...props
}: NextLinkProps) {
    const customProps: Partial<typeof props> = {};

    if (!internal) {
        customProps.rel = 'nofollow external';

        if (newTab === undefined) {
            newTab = true;
        }
    }

    if (newTab) {
        customProps.target = '_blank';

        const rel = 'noopener noreferrer';

        if (customProps.rel) {
            customProps.rel += ` ${rel}`;
        } else {
            customProps.rel = rel;
        }
    }

    return (
        <Link
            prefetch={DONT_PREFETCH ? false:prefetch}
            {...props}
            {...customProps}
        >
            {children}
        </Link>
    );
}