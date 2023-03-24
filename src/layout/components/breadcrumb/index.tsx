import React, { useEffect, useState } from 'react'
import { Breadcrumb } from '@douyinfe/semi-ui'
import menuList, { MenuItem } from '@src/config/menu_config'
import { useLocation } from 'react-router-dom'
import { useLocale } from '@src/locales'

interface BreadcrumbItem {
    key: string
    path?: string
    title: string
}

const { Item } = Breadcrumb
let breadcrumbList: BreadcrumbItem[] = []
let end = false

// 根据pathname找出面包屑路径
const getBreadcrumbByPathName = (pathname: string, menuList: MenuItem[], breadcrumbs: BreadcrumbItem[] = []) => {
    for (const menu of menuList) {
        const list: BreadcrumbItem[] = []
        if (!end) {
            list.push({ key: menu.itemKey, path: menu.path, title: menu.text })
            if (menu.path === pathname) {
                breadcrumbList.concat(list)
                end = true
                break
            } else if (menu.items) {
                getBreadcrumbByPathName(pathname, menu.items, breadcrumbs.concat(list))
            }
        }
    }
}

const Index: React.FC = () => {
    const { pathname } = useLocation()
    const { formatMessage } = useLocale()
    const [_, setState] = useState(1)

    useEffect(() => {
        end = false
        if (pathname === '/') getBreadcrumbByPathName('/order-list', menuList)
        else getBreadcrumbByPathName(pathname, menuList)
        setState((state) => state + 1)
    }, [pathname])

    return (
        <Breadcrumb>
            {breadcrumbList.map((e) => {
                return <Item key={e.key}>{formatMessage({ id: e.title })}</Item>
            })}
        </Breadcrumb>
    )
}

export default Index
