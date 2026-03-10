import { initLingui, PageLangParam } from '../../../initLingui'
import { Issue1Page } from './_components/Issue1Page'

export default async function Page(props: PageLangParam) {
  const lang = (await props.params).lang

  initLingui(lang)

  return <Issue1Page />
}
