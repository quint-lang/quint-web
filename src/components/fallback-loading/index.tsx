import React, { FC } from 'react'
import { Spin, Banner } from '@douyinfe/semi-ui'

interface FallBackMessageProps {
    message: string
    description?: string
}

const FallbackLoading: FC<FallBackMessageProps> = ({ message, description }) => {
    return (
        <Spin tip="loading...">
            <Banner 
                fullMode={false}
                type="info"
                bordered
                icon={null}
                closeIcon={null}
                description={<div>{description}</div>} />
        </Spin>
    )
}

export default FallbackLoading
