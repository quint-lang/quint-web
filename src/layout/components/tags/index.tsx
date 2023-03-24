import React, { FC, useCallback, useEffect } from "react"
import { Tabs, TabPane } from "@douyinfe/semi-ui"
import useStore from "@src/store/common/headerTag"
import { useLocale } from "@src/locales"
import menuList, { MenuItem } from "@src/config/menu_config"
import { useNavigate, useLocation } from "react-router-dom"

const Index: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { formatMessage } = useLocale()
    const [tags, activeTagId, addTag, removeTag, setActiveTag] = useStore((state) => [
        state.tags,
        state.activeTagId,
        state.addTag,
        state.removeTag,
        state.setActiveTag
    ])

    const onChange = (key: string) => {
        const tag = tags.find((e) => e.id === key)
        if (tag) {
            setCurrentTag(tag.id)
            navigate(tag.path)
        }
    }
    const setCurrentTag = useCallback(
        (id?: string) => {
            const tag = tags.find((e) => {
                if (id) return e.id === id
                return e.path === location.pathname
            })
            if (tag) {
                setActiveTag(tag.id)
            }
        },
        [location.pathname, tags]
    )

    const onClose = (key: string) => {
        removeTag(key)
    }

    const findMenuByPath = (pathname: string, menuList: MenuItem[]): MenuItem | undefined => {
        for (const menu of menuList) {
            if (menu.path === pathname) {
                return menu
            } else if (menu.items) {
                const result = findMenuByPath(pathname, menu.items)
                if (result) return result
            }
        }
    }

    useEffect(() => {
        if (menuList.length) {
            const { pathname } = location
            const menu = findMenuByPath(pathname, menuList)
            if (menu) {
                addTag({
                    path: menu.path as string,
                    label: formatMessage({ id: menu.text }),
                    id: menu.itemKey,
                    closable: true
                })
            }
        }
    }, [location.pathname])

    useEffect(() => {
        if (tags && activeTagId) {
            const targetTab = tags.filter((e) => e.id === activeTagId)
            navigate(targetTab[0].path)
        }
    }, [tags, activeTagId])

    return (
        <div id="pageTabs" style={{ background: "#fff", marginRight: '15px' }}>
            <Tabs
                type="card"
                activeKey={activeTagId}
                onChange={onChange}
                tabBarStyle={{ margin: 5 }}
                onTabClose={(targetKey) => onClose(targetKey as string)}
                className="headertabs"
            >
                {tags.map((e) => {
                    <TabPane tab={e.label} itemKey={e.id} closable={e.closable} key={e.id} />
                })}
            </Tabs>
        </div>
    )
}

export default Index
