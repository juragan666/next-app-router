
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <nav className="fixed right-0 top-[63px] z-10 h-screen w-60 bg-gray-800">
            <ul className="p-5 text-white">
              <li>Home</li>
              <li>About</li>
              <li>Profile</li>
            </ul>
        </nav>
        <div>
          {children}
        </div>
      </>
  )
}