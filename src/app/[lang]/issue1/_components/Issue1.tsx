'use client'

import { Trans } from "@lingui/react/macro";

import NextLink from "./NextLink";

/**
 * Note: only fails if React Compiler is enabled.
 *
 * @returns
 */
export default function Issue1() {
    return (
        <>
            <h1>Issue 1</h1>

            <small>
                <Trans>
                    This site is protected by reCAPTCHA and the Google
                    {' '}

                    <NextLink
                        href="https://policies.google.com/privacy"
                        newTab={true}
                        internal={false}
                    >
                        Privacy Policy
                    </NextLink>

                    {' '}
                    and
                    {' '}

                    <NextLink
                        href="https://policies.google.com/terms"
                        newTab={true}
                        internal={false}
                    >
                        Terms of Service
                    </NextLink>

                    {' '}
                    apply.
                </Trans>
            </small>
        </>
    )
}