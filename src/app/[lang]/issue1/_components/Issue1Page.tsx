import React from 'react'
import { useLingui } from '@lingui/react'
import Head from 'next/head'
import { msg } from '@lingui/core/macro'

import styles from '../../../../styles/Index.module.css'
import { Switcher } from '../../../../components/Switcher'

import Issue1 from './Issue1'

export const Issue1Page = () => {
  const { i18n } = useLingui()

  return (
    <div className={styles.container}>
      <Head>
        {/*
         The Next Head component is not being rendered in the React
         component tree and React Context is not being passed down to the components placed in the <Head>.
         That means we cannot use the <Trans> component here and instead have to use lazy translation with a message descriptor.
        */}
        <title>{i18n._(msg`Issue 1`)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Switcher />

        <Issue1 />

      </main>
    </div>
  )
}
