import Link from 'next/link'
import { headers } from 'next/headers'
export default function Header() {
  //hacky way to determine active nav server side
  const headersList = headers()
  const path = headersList.get('x-invoke-path') || ''
  let isMlb = false
  let isNba = false
  if (path?.length > 0) {
    isMlb = path.toLowerCase().includes('mlb')
    if (!isMlb) {
      isNba = path.toLowerCase().includes('nba')
    }
  }
  return (
    <header className='flex flex-row  items-center justify-center sticky top-0 w-screen py-6 px-10 h-20 shadow bg-primary text-white'>
      <div className='flex flex-row  items-center justify-between w-full '>
        {/* max-w-4xl */}
        <Link href='/' className='text-4xl'>
          <img src='/barstool-sports-logo.webp' alt='BS' className='h-16 w-16 object-cover' />
        </Link>
        <nav>
          <ul className='flex text-2xl font-bold'>
            <li>
              <a className={`hover:text-yellow-400 ${isMlb ? 'text-yellow-400 underline decoration-yellow-400' : ''}`} href='/scoreboard/mlb'>
                MLB
              </a>
            </li>
            <li>
              <a className={`ml-4 hover:text-yellow-400 ${isNba ? 'text-yellow-400 underline decoration-yellow-400' : ''}`} href='/scoreboard/nba'>
                NBA
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
