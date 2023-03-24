import React, {FC} from "react"
import { Navigate } from "react-router-dom"
import { RouteProps, useLocation } from "react-router"
import  Empty  from "@src/components/empty"


const PrivateRoute: FC<RouteProps> = (props) => {
    const location = useLocation()
    const { pathname } = location
    const logged = true

    return logged ? (
        pathname === '/' ? (
            <Navigate to={{ pathname: '/home'}} replace />
        ) : (
            props.element
        )
    ) : (
        <Empty title="没有权限" description="您还没有登录，请先去登录" type="403" />
    )
}

export default PrivateRoute
