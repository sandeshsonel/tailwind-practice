import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PropTypes = {
  isBack?: boolean
  navigateUrl: string
}

const NavigateLink = (props: PropTypes) => {
  const { isBack = true, navigateUrl } = props
  return (
    <Link href={navigateUrl} className="flex items-center space-x-2 underline">
      {isBack && (
        <Image
          src="/assets/icons/chevron-back-outline.svg"
          alt="chevron-back-outline"
          width={14}
          height={14}
        />
      )}
      {isBack ? 'Back' : 'Next'}

      {!isBack && (
        <Image
          src="/assets/icons/chevron-forward-outline.svg"
          alt="chevron-forward-outline"
          width={14}
          height={14}
        />
      )}
    </Link>
  )
}

export default NavigateLink
