import React from 'react'
import { useNavigate, useUrl } from '@tramvai/module-router'

import { PagesPath } from 'pages'
import { Button } from 'components/shared/Button/Button'

export const SecondPage = () => {
  const currentPath = useUrl().path
  const navigateToMainPage = useNavigate(PagesPath.MAIN)

  return (
    <div>
      Current route is <b>{currentPath}</b>{' '}
      <Button onClick={navigateToMainPage}>to main page</Button>
    </div>
  )
}

export default SecondPage
