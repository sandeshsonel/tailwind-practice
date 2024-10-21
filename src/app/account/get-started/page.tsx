import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Login'
}

const GetStarted = () => {
  return (
    <div className="max-w-sm mx-auto space-y-8">
      <div>Let&apos;s get started</div>
      <div>
        To continue checking out, please sign into your Flink account. If you
        don&apos;t yet have an account, you can create one now.
      </div>
      <div className="flex flex-col space-y-3">
        <Link href="/account/signup">
          <button className="w-full bg-pink-600 font-medium py-3 rounded-xl">
            Create account
          </button>
        </Link>
        <Link href="/account/login">
          <button className="w-full bg-pink-100 text-pink-600 font-medium py-3 rounded-xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GetStarted
