import React, { FC } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import * as Yup from 'yup'
import { FormikProps, useFormik } from 'formik'

import NavigateLink from '@/components/NavigateLink'

export const metadata: Metadata = {
  title: 'Create account'
}

export interface FormStateType {
  email: string
  password: string
}

const SignUp: FC = () => {
  const handleSubmit = async (values: FormStateType) => {
    console.log('xoxo-values', values)
  }

  const formik: FormikProps<FormStateType> = useFormik<FormStateType>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email format is invalid')
        .required('Email is a required field'),
      password: Yup.string()
        .required('No password provided.')
        .min(5, 'Password is too short - should be 8 chars minimum.')
    }),
    onSubmit: (values) => handleSubmit(values)
  })

  console.log({ formik })
  return (
    <div>
      <NavigateLink navigateUrl="/account/get-started" />

      <div>
        <div>Create an account</div>
        <div>Let’s get you ready to place your order</div>
      </div>

      <div className="flex flex-col space-y-2 mt-4">
        <button className="bg-black text-white w-full py-3 rounded-md flex items-center justify-center space-x-2">
          <Image
            src="/assets/icons/apple.svg"
            alt="apple"
            width="24"
            height="24"
          />
          <span>Continue with Apple</span>
        </button>
        <button className="bg-gray-100 w-full py-3 rounded-md flex items-center justify-center space-x-2">
          <Image
            src="/assets/icons/google-auth.svg"
            alt="google"
            width="24"
            height="24"
          />
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center justify-center my-4">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>
      </div>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="Enter first name"
              value={formik.values.email}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
