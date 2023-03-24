import {
    IconHome,
    IconUser,
    IconEdit,
    IconGridRectangle,
    IconApps,
    IconTickCircle,
    IconAlertTriangle
} from '@douyinfe/semi-icons'

export interface MenuItem {
    itemKey: string
    text: string
    icon?: React.ReactNode
    path?: string
    items?: MenuItem[]
    component?: React.ComponentType<any>
}

const MENU_CONFIG: MenuItem[] = [
    {
        itemKey: '1',
        text: 'app.menu.form',
        icon: IconEdit,
        items: [
            {
                itemKey: '1-1',
                text: 'app.menu.form.basic',
                path: '/form/basic'
            }
        ]
    }
]

export default MENU_CONFIG
