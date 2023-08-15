"use client"
import Image from 'next/image'
import styles from './page.module.css'
import {Avatar} from '@ag.ds-next/react/avatar'
import {GlobalAlert} from '@ag.ds-next/react/global-alert'
import {Text} from '@ag.ds-next/react/text'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>hello</h1>

        <Avatar name="William Mead" />

        <GlobalAlert title="Alert title" tone='info'>
	<Text as="p">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh,
		aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci
		vulputate nibh sagittis blandit.
	</Text>
</GlobalAlert>
      </div>
    </main>
  )
}
