import NavigateLink from '@/components/NavigateLink'
import { Metadata } from 'next'
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: 'Login'
}

const Login: FC = () => {
  return (
    <div>
      <NavigateLink navigateUrl="/account/get-started" />
    </div>
  )
}

export default Login
