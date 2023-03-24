import React, { Suspense } from 'react'
import { Layout } from '@douyinfe/semi-ui'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import FallbackLoading from '@src/components/fallback-loading'

import './index.scss'

const { Content } = Layout

const Index: React.FC = () => {
    return (
        <Layout className='layout-page'>
            <Layout>
                <Header />
                <Content className='layout-countent'>
                    <Suspense fallback={<FallbackLoading message='loading...'/>}>
                        <Outlet />
                    </Suspense>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    )
}

export default Index