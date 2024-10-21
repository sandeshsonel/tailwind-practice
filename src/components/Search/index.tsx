'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Search = () => {
  const pathname = usePathname()

  console.log('pathname', pathname)
  return (
    <div
      className={`${
        pathname !== '/search' ? 'cursor-pointer ' : ''
      }flex items-center space-x-4 px-4 py-3 shadow rounded-lg w-full bg-white`}
      onClick={(e) => {
        if (pathname === '/') {
          e.preventDefault()
        }
      }}>
      <Image
        src="/assets/icons/search-outline.svg"
        alt="search-outline"
        width={22}
        height={22}
      />
      <input
        type="text"
        placeholder="Search for over 5000 products"
        className={`
            ${
              pathname !== '/search' ? 'cursor-pointer ' : ''
            }w-full outline-none bg-white`}
        autoFocus={pathname === '/search'}
      />
    </div>
  )
}

export default Search
