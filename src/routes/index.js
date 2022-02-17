import { useRoutes } from "react-router-dom"

import Dashboard from "./Dashboard"

import { AppRoutes } from "configs/index"
import UseScrollToTop from "hooks/useScrollToTop"

const AppRouter = () => {
  let routes = useRoutes([
    { path: AppRoutes.DASHBOARD, element: <Dashboard /> },
  ])

  return (
    <>
      <UseScrollToTop>{routes}</UseScrollToTop>
    </>
  )
}

export default AppRouter
