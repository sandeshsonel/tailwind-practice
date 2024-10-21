'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Dialog, DialogContent } from '@/components/ui/dialog'

import Search from '../Search'

const Header = () => {
  const [state, setState] = useState(false)
  const [isOpenLocationDialog] = useState(false)
  return (
    <>
      <div className="flex items-center space-x-6 py-4 w-full max-w-7xl mx-auto">
        <Image
          src="/assets/icons/primary-logo.svg"
          alt="primary-logo"
          width={92}
          height={92}
        />
        <button
          className="flex items-center space-x-1 w-56"
          onClick={() => setState(true)}>
          <span className="font-medium text-sm">Select Location</span>
          <Image
            src="/assets/icons/chevron-down-outline.svg"
            alt="chevron-down-outline"
            width={18}
            height={18}
          />
        </button>
        <Search />
        <Link href="/account/login" className="flex flex-col items-center">
          <Image
            src="/assets/icons/person-circle-outline.svg"
            alt="person-circle-outline"
            width={26}
            height={26}
          />
          <span>Login</span>
        </Link>
        <button className="flex flex-col items-center">
          <Image
            src="/assets/icons/cart-outline.svg"
            alt="cart-outline"
            width={26}
            height={26}
          />
          <span>Cart</span>
        </button>
      </div>

      {state && (
        <Dialog open={state} onOpenChange={() => setState(!state)}>
          <DialogContent
            className={`p-0 h-[${
              isOpenLocationDialog ? '24' : '30'
            }rem] w-full max-w-[36rem]`}
            isCloseIcon={false}>
            {isOpenLocationDialog ? (
              <>
                <div className="flex items-start justify-center relative shadow py-3">
                  <div className="text-center font-semibold">Your Location</div>
                  <button onClick={() => setState(false)}>
                    <Image
                      src="/assets/icons/close-circle-outline.svg"
                      className="absolute right-0 mr-3"
                      alt="close-circle-outline"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between bg-gray-100 py-3 px-3 rounded-lg border-gray-300 border mt-1">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/icons/search-outline.svg"
                        alt="search-outline"
                        width={16}
                        height={16}
                      />
                      <input
                        type="text"
                        autoFocus
                        placeholder="Search a new address"
                        className="bg-gray-100 outline-none text-sm"
                      />
                    </div>
                    <button>
                      <Image
                        src="/assets/icons/close-circle-outline.svg"
                        className=""
                        alt="close-circle-outline"
                        width={16}
                        height={16}
                      />
                    </button>
                  </div>
                  <div className="flex items-start space-x-4 mt-5">
                    <Image
                      src="/assets/icons/current-location-marker-icon.svg"
                      className="mt-1"
                      alt="current-location-marker-icon"
                      width={20}
                      height={20}
                    />
                    <div className="flex items-end space-x-4">
                      <div>
                        <div className="font-semibold">Current Location</div>
                        <div className="text-sm text-gray-500">
                          Enable your current location for better services
                        </div>
                      </div>
                      <button className="px-3 py-2 text-sm border border-gray-400 rounded-md">
                        Enable
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="flex items-center justify-center py-3 shadow">
                  <button>
                    <Image
                      src="/assets/icons/chevron-back-outline.svg"
                      alt="chevron-back-outline"
                      className="absolute left-0 top-4 ml-2"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="font-semibold">Location Information</div>
                </div>
                <div className="bg-gray-100">
                  <div className="p-3 w-full">
                    <button className="flex p-3 rounded-full shadow-md bg-white">
                      <Image
                        src="/assets/icons/locate-outline.svg"
                        alt=" "
                        width={20}
                        height={20}
                      />
                    </button>
                    <div className="rounded-2xl bg-white shadow p-5">
                      <div>
                        <div className="font-semibold">Pocket 25</div>
                        <div className="text-sm mt-1">
                          987, Pocket 25, Subhash Place, Rohini, Delhi, 110034,
                          India
                        </div>
                      </div>
                      <button className="w-full outline-none py-3 mt-6 bg-black text-white rounded-md">
                        Confirm & Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default Header
