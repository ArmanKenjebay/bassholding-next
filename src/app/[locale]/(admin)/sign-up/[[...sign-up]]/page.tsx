import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className={`flex w-full h-full`}>
      SIGN UP
      <SignUp />
    </div>
  )
}
