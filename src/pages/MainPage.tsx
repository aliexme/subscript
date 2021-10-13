import React from 'react'
import { useNavigate } from '@tramvai/module-router'

import { PagesPath } from 'pages'
import { Button } from 'components/shared/Button/Button'

export const MainPage = () => {
  const navigateToSecondPage = useNavigate(PagesPath.SECOND)

  return (
    <div>
      Main Page <Button onClick={navigateToSecondPage}>to second page</Button>
    </div>
  )
}

export default MainPage
