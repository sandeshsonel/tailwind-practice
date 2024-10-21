import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Error'
}

const NotFoundPage = () => {
  return (
    <div className="bg-[url('/assets/images/error.jpg')] h-screen bg-center absolute right-0 left-0">
      <div className="bg-white p-8 max-w-md w-full rounded-xl mx-auto text-center mt-28">
        <div className="space-y-3">
          <div className="font-semibold">Oh snap! We can’t find your page</div>
          <div>This page could not be found</div>
        </div>
        <Link href="/shop">
          <div className="bg-pink-600 text-white w-full py-3 mt-10 rounded-xl">
            Explore Groceries
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
