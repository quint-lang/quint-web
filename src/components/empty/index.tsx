import React, { FC } from 'react'
import { Empty, Button } from '@douyinfe/semi-ui'
import { useNavigate } from 'react-router-dom'
import { IllustrationNoAccess, IllustrationConstruction } from '@douyinfe/semi-illustrations'

interface Iprops {
    title?: string
    description?: string
    type: '404' | '403' | '500'
}

const Result: FC<Iprops> = ({ title, description, type }) => {
    const navigate = useNavigate()
    const getIllustration = () => {
        switch (type) {
            case '404':
                return <IllustrationNoAccess style={{ width: 150, height: 150 }}/>
            case '403':
                return <IllustrationConstruction style={{ width: 150, height: 150 }}/>
            case '500':
                return <IllustrationConstruction style={{ width: 150, height: 150 }}/>
            default:
                return <IllustrationConstruction style={{ width: 150, height: 150 }}/>
        }
    }
    return (
        <Empty
            image={getIllustration()}
            title={title}
            description={description}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Button 
                style={{ padding: '6px 24px', width: ' 180px' }}
                theme="solid"
                type='primary'
                onClick={
                    type === '403' 
                        ? () => navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true }) 
                        : () => navigate(`/home`, { replace: true })
                }>
                { type === '403' ? '去登录' : '返回首页' }
            </Button>
        </Empty>
    )
}

export default Result
