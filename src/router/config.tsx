import React, { FC, Suspense } from "react"
import { RouteProps } from "react-router"
import PrivateRoute from "./privateRoute"
import FallbackLoading from "@src/components/fallback-loading"

export interface WraooerRouteProps extends RouteProps {
    titleId: string
    auth?: boolean
}

const PublicRoute =  (props) => {
    return props.element
}

const WrapperRouteComponent: FC<WraooerRouteProps> = ({titleId, auth, ...props}) => {
    const Component = auth ? PrivateRoute : PublicRoute
    if (titleId) {
        document.title = titleId
    }
    return (
        <Component {...props}/>
    )
}

const WrapperRouteWithoutLayoutComponent: FC<WraooerRouteProps> = ({titleId, auth, ...props}) => {
    if (titleId) {
        document.title = titleId
    }
    return (
        <Suspense fallback={<FallbackLoading message='loading...'/>}>
            {props.element}
        </Suspense>
    )
}

export { WrapperRouteComponent, WrapperRouteWithoutLayoutComponent }