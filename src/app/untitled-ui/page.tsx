'use client'

import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

const colorOptions = [
  '#000',
  '#6A38EF',
  '#7939EF',
  '#165EF0',
  '#2D67F6',
  '#2E90FB',
  '#098AB2',
  '#0A904F'
]

const themeOptions = [
  { label: 'System preference', value: 'system-preference', bg: 'bg-gray-50' },
  { label: 'Light', value: 'light', bg: 'bg-gray-200' },
  { label: 'Dark', value: 'dark', bg: 'bg-gray-500' }
]

const items = [
  {
    title: 'Home',
    url: '#',
    path: '/assets/icons/home-outline.svg',
    children: []
  },
  {
    title: 'Dashboard',
    url: '#',
    path: '/assets/icons/square-outline.svg',
    children: []
  },
  {
    title: 'Projects',
    url: '#',
    path: '/assets/icons/folder-outline.svg',
    children: [
      {
        title: 'All designers',
        url: '#',
        path: ''
      },
      { title: 'Popular', url: '#', path: '' }
    ]
  }
]

const UntiledUi = () => {
  const [selectColor, setSelectColor] = useState('#000')
  const [inputColor, setInputColor] = useState('')
  const [selectTheme, setSelectTheme] = useState('')
  const [profile, setProfile] = useState<File | null>(null)
  console.log({ selectTheme, selectColor })

  const handleChangeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null

    if (file) {
      const fileType = file.type

      if (!fileType.startsWith('image/')) {
        toast.error('Please upload a valid image file!')
      } else {
        setProfile(file)
      }
    }
  }
  return (
    <>
      <div className="flex start w-full h-full">
        <div className="w-full p-8 md:p-10 xl:px-10 xl:py-10 mx-auto">
          <div className="space-y-5 max-w-md mx-auto">
            <div>
              <div className="text-2xl font-semibold">Create your account</div>
              <div className="text-base text-gray-500 mt-2">
                Let&apos;s get your profile set up in less than 2 minutes
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">
                Choose your color theme
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  {colorOptions.map((option, idx) => (
                    <div
                      key={idx}
                      style={{
                        border: `2px solid ${
                          selectColor && selectColor === option
                            ? option
                            : '#fff'
                        }`
                      }}
                      className={`flex items-center justify-center border-2 p-[2px] rounded-full`}>
                      <button
                        onClick={() => setSelectColor(option)}
                        style={{ backgroundColor: option }}
                        className={`bg-[${option}] w-6 h-6 rounded-full`}></button>
                    </div>
                  ))}
                </div>
                <div className="hidden md:block xl:block">
                  <input
                    type="text"
                    value={inputColor}
                    placeholder="#FFFFFF"
                    className="outline-none rounded-md border border-gray-200 w-24 py-1 px-3 text-gray-400"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">
                Upload a profile picture
              </div>
              <div className="flex items-center space-x-5 mt-3">
                <Image
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : `/assets/images/profile.jpg`
                  }
                  alt="profile"
                  className="rounded-xl border border-gray-400 w-16 h-16 max-w-16 max-h-16 object-cover"
                  width={60}
                  height={60}
                />
                <label className="outline-none font-medium border border-gray-300 hover:border-gray-400 py-2 px-3 text-sm rounded-md cursor-pointer">
                  Upload picture
                  <input
                    type="file"
                    id="uploadFile1"
                    className="hidden"
                    accept="image/*"
                    onChange={handleChangeUpload}
                  />
                </label>
              </div>
            </div>
            <div className="pb-6">
              <div className="text-sm font-semibold">Choose your theme</div>
              <div className="flex items-center space-x-4 mt-3 overflow-y-auto">
                {themeOptions.map((themeOption, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <button onClick={() => setSelectTheme(themeOption.value)}>
                      <div
                        style={{
                          border: `2px solid ${
                            selectColor && selectTheme === themeOption.value
                              ? selectColor
                              : '#9ca3af'
                          }`
                        }}
                        className={`w-32 h-24 border border-gray-400 rounded-md ${themeOption.bg}`}
                      />
                    </button>
                    <div className="text-xs font-semibold mt-2">
                      {themeOption.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              style={{ backgroundColor: selectColor }}
              className={`w-full text-white py-3 rounded-md text-sm hover:opacity-90`}>
              Next
            </button>
          </div>
        </div>
        <div className="w-3/5 bg-gray-100 pl-20 pt-20 md:block xl:block hidden">
          <div className="bg-gray-100 flex">
            <div className="w-64 border-r px-4 py-4 rounded-md bg-white">
              <div className="flex items-center space-x-2 w-full bg-white py-2 rounded-md px-2 border border-gray-300 text-sm">
                <Image
                  src="/assets/icons/search-outline.svg"
                  alt="search-outline"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none"
                />
              </div>
              <div className="mt-4">
                {items.map((sidebarItem, idx) => (
                  <>
                    <button
                      key={idx}
                      className="w-full py-2 px-3 mt-1 rounded-md hover:bg-gray-50 flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm font-semibold">
                        <Image
                          src={sidebarItem.path}
                          alt="home-outline"
                          width={24}
                          height={24}
                        />
                        <span className="text-gray-800">
                          {sidebarItem.title}
                        </span>
                      </div>
                      {sidebarItem.children.length > 0 && (
                        <div>
                          <Image
                            src="/assets/icons/chevron-down-outline.svg"
                            alt="chevron-down-outline"
                            width={16}
                            height={16}
                            className="fill-gray-200 stroke-black"
                          />
                          {/* chevron-up-outline */}
                        </div>
                      )}
                    </button>
                    {sidebarItem.children.length > 0 &&
                      sidebarItem.children.map((childrenItem, idx) => (
                        <button
                          key={idx}
                          className="w-full py-2 px-3 mt-1 rounded-md hover:bg-gray-50 flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-sm font-semibold">
                            {childrenItem.path && (
                              <Image
                                src={childrenItem.path}
                                alt="home-outline"
                                width={24}
                                height={24}
                              />
                            )}
                            <span className="ml-9">{childrenItem.title}</span>
                          </div>
                        </button>
                      ))}
                  </>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white w-full">
              <div className="flex items-start space-x-4">
                <Image
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : `/assets/images/profile.jpg`
                  }
                  alt="profile"
                  className="rounded-xl border border-gray-400 w-20 h-20 max-w-32 max-h-32 object-cover"
                  width={100}
                  height={100}
                />
                <div className="space-y-1">
                  <div className="font-semibold">Rhianna Shepard</div>
                  <div className="text-gray-600 text-sm">
                    I&apos;m a product designer based in Melbourne, focused on
                    creating intuitive and impactful digital products that solve
                    real user problems.
                  </div>
                </div>
              </div>
              <div className="mt-5 bg-gray-50 p-6 space-y-3">
                <div className="space-y-2">
                  <div className="font-semibold">Experience</div>
                  <div className="text-gray-600">
                    I specialize in UX/UI design, brand strategy, and Webflow
                    development, combining creativity and technical expertise to
                    create seamless digital experiences. My approach is
                    user-centered, ensuring that design choices align with brand
                    identity while enhancing usability.
                  </div>
                </div>
                <hr className="mt-3 mb-3" />
                <div className="space-y-2">
                  <div className="font-semibold">About me</div>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      I&apos;m a Product Designer based in Melbourne, Australia.
                      I specialize in UX/UI design, brand strategy, and Webflow
                      development. I&apos;m always striving to learn something
                      new and I don&apos;t take myself too seriously.
                    </p>
                    <p>
                      My work has been featured on <u>Typewolf</u>,&nbsp;
                      <u>Mindsparkle</u>,&nbsp;
                      <u>Magazine</u>, <u>Awwwards</u>,&nbsp;
                      <u>Best Website Gallery</u>, <u>CSS Winner</u>,&nbsp;
                      <u>Httpster</u> and <u>Siteinspire</u>
                    </p>
                  </div>
                </div>
                <hr className="mt-4 mb-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default UntiledUi
