import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from '@douyinfe/semi-ui'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US'
import useStore from './store/common/global'
import { localeConfig } from './locales'
import  RenderRouter from './router'
import './App.scss'

function Mian() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

const App = () => {
  const locale = useStore((state) => state.locale)

  const getLocale = useMemo(() => {
    return locale === 'zh_CN' ? zh_CN : en_US
  }, [locale])

  return (
    <LocaleProvider locale={getLocale}>
      <IntlProvider locale={locale.split('_')[0]} messages={localeConfig[locale]}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </IntlProvider>
    </LocaleProvider>
  )
}


export default App
