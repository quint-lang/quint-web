import React, { lazy, FC } from "react"
import { RouteObject } from "react-router"
import { useRoutes } from "react-router-dom"
import { WrapperRouteComponent, WrapperRouteWithoutLayoutComponent } from "./config"
import Empty from "@src/components/empty"
import LayoutPage from "@src/layout"


const Home = lazy(() => import("@src/pages/home"))

const routes: RouteObject[] = [
    {
        path: '/',
        element: <WrapperRouteComponent element={<LayoutPage />} titleId="" auth />,
        children: [
            {
                path: 'home',
                element: <WrapperRouteComponent element={<Home />} titleId="首页" auth />
            }
        ]
    },
    {
        path: '*',
        element: (
            <WrapperRouteWithoutLayoutComponent
                element={<Empty title="404" description="页面不存在" type="404" />}
                titleId="404"
            />
        )
    }
]

const RenderRouter: FC = () => {
    const element = useRoutes(routes)
    return element
}

export default RenderRouter

