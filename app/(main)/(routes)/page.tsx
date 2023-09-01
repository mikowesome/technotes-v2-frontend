import Link from 'next/link';

export default function Home() {
  const content = (
    <section className='flex flex-col flex-grow p-[1em] gap-[1rem] min-h-screen'>
      <header>
        <h1>Welcome to <span className='whitespace-nowrap'>Dan D. Repairs!</span></h1>
      </header>
      <main className='flex-grow border-t-2 border-t-white border-b-2 border-bwhite- py-[1em]'>
        <p>Located in Beautiful Downtown Foo City, Dan D. Repairs provides a trained staff ready to meet your tech repair needs.</p>
        <address className='mt-[1em]'>
          Dan D. Repairs<br />
          555 Foo Drive<br />
          Foo City, CA 12345<br />
          <Link href='tel:+15555555555'>(555) 555-5555</Link>
        </address>
        <br />
        <p>Owner: Dan Davidson</p>
      </main>
      <footer>
        <Link href='/login'>Employee Login</Link>
      </footer>
    </section>
  )

  return content
}