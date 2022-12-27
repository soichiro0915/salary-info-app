'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import Spinner from './spinner'

export default function NavBar() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <header>
      <nav className="flex flex-wrap items-center bg-gray-800 p-3 font-bold text-white">
        <Link href="/" className="mr-4 inline-flex items-center p-2">
          Home
        </Link>

        <div className="ml-auto flex">
          {loading && <Spinner width="w-6" height="h-6" />}
          {session?.user ? (
            <>
              <span className="mx-2 font-normal">{session.user.name}</span>
              <button
                className="cursor-pointer font-normal text-indigo-500 hover:text-indigo-300"
                onClick={() => {
                  signOut()
                }}
              >
                SignOut
              </button>
            </>
          ) : (
            <button
              className="cursor-pointer font-normal text-indigo-500 hover:text-indigo-300"
              onClick={() => signIn('github')}
            >
              SignIn GitHub
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
