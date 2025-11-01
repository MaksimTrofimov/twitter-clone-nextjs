import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="h-screen w-full bg-linear-to-r from-[#008ef7] to-[#055589] p-5">
      <div className="flex h-full flex-col sm:flex-row sm:items-center sm:justify-between">
        <header className="flex items-center justify-start sm:m-5 sm:w-1/2 sm:justify-center">
          <Image
            src="/icons/twitter-logo-white.svg"
            alt="Twitter Logo"
            width={90}
            height={90}
            className="sm:h-100 sm:w-100"
          />
        </header>
        <main className="mt-12 sm:w-1/2">
          <h1 className="text-5xl font-semibold lg:text-7xl">Happening now</h1>
          <h2 className="mt-5 text-3xl font-semibold sm:mt-10">
            Join Twitter today.
          </h2>
          <section className="mt-5 flex w-full flex-col items-center justify-center sm:max-w-96">
            <Link
              href="/tweet"
              className="w-full rounded-2xl border-2 border-gray-500 bg-white p-2 text-center font-semibold hover:bg-gray-300"
            >
              Sign up with Google
            </Link>
            <Link
              href="/tweet"
              className="mt-2 w-full rounded-2xl border-2 border-gray-500 bg-white p-2 text-center hover:bg-gray-300"
            >
              Sign up with Apple
            </Link>
            <span className="mt-2 uppercase">or</span>
            <Link
              href="/tweet"
              className="mt-2 w-full rounded-2xl border-2 border-gray-500 bg-black p-2 text-center font-semibold text-white hover:bg-gray-700"
            >
              Create account
            </Link>
            <p className="mt-2 text-sm text-gray-50">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            <p className="w-full pt-10 text-left">Already have an account?</p>
            <Link
              href="/tweet"
              className="mt-2 w-full rounded-2xl border-2 border-gray-500 bg-white p-2 text-center font-semibold hover:bg-gray-300"
            >
              Sign in
            </Link>
          </section>
        </main>
      </div>
    </section>
  );
}
