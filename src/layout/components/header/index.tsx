import React, { FC } from 'react'
import { Layout, Nav, Button, Avatar, Badge, Dropdown, RadioGroup, Radio } from '@douyinfe/semi-ui'
import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons'
import  useStore  from '@src/store/common/global'
import Breadcrumb from '../breadcrumb'
import Tags from '../tags'
import '../../index.scss'

const { Header } = Layout

const Index: FC = () => {

    const locale = useStore((state) => state.locale)
    const changeLocale = useStore((state) => state.changeLocale)

    const selectLocale = (locale: 'zh_CN' | 'en_US') => {
        changeLocale(locale)
        localStorage.setItem('semi-locale', locale)
    }

    const question = () => {
        window.open('https://github.com/xieyezi/semi-design-pro/issues')
    }

    const menu = (
        <Nav>
            <Nav.Item>个人中心</Nav.Item>
            <Nav.Item>设置</Nav.Item>
            <Nav.Item>退出登录</Nav.Item>
        </Nav>
    )

    return (
        <Header className="layout-header">
            <Nav
                mode='horizontal'
                header={<Breadcrumb/>}
                footer={
                    <>
                        <Button
                            theme='borderless'
                            icon={<IconHelpCircle size='large'/>}
                            onClick={question}
                            style={{ marginRight: '12px', color: 'var(--semi-color-text-2)' }}
                        />
                        <Badge count={5} type='danger'>
                            <Button
                                theme='borderless'
                                icon={<IconBell/>}
                                style={{ marginRight: '12px', color: 'var(--semi-color-text-2)' }}
                            />
                        </Badge>

                        <Dropdown
                            render={
                                <Dropdown.Menu>
                                    <Dropdown.Item>个人中心</Dropdown.Item>
                                    <Dropdown.Item>设置</Dropdown.Item>
                                    <Dropdown.Item>退出登录</Dropdown.Item>
                                </Dropdown.Menu>
                            }
                        >
                            <Avatar color='orange' size='small'>
                                Quint
                            </Avatar>
                        </Dropdown>

                        <RadioGroup type='button' defaultValue={locale} style={{ marginLeft: '20px' }}>
                            <Radio value='zh_CN' onChange={() => selectLocale('zh_CN')}>
                                中文
                            </Radio>
                            <Radio value='en_US' onChange={() => selectLocale('en_US')}>
                                English
                            </Radio>
                        </RadioGroup>
                    </>
                }
            ></Nav>
            <Tags/>
        </Header>
    )
}

export default Index
