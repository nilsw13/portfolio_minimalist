'use client'

import { useState } from "react"
import Image from "next/image"
import { useIsMobile } from "../hooks/use-isMobile"
import Link from "next/link"

export default function HeaderNav() {
  const navItems = [
    { id: 0, title: "Accueil", link: "#top" },
    { id: 1, title: "Missions", link : "#missions" },
    { id: 2, title: "Open Source", link: "#open-source" },
    { id: 3, title: "Contact" , link: "#contact"},
  ]

  const isMobile = useIsMobile()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div className="w-full sticky top-0 z-50 border-b border-gray-100 py-4 backdrop-blur-sm bg-white/70">

      <div className="max-w-5xl px-4 flex mx-auto items-center justify-between py-1">
        <span className="font-semibold text-lg">Portfolio</span>

        {!isMobile ? (
          <div className="flex justify-center text-gray-700 font-medium gap-6 text-base">
            {navItems.map((nav) => (
              <Link className="hover:text-gray-900" key={nav.id} href={nav.link}>{nav.title}</Link>
            ))}
          </div>
        ) : (
          <div className="cursor-pointer" onClick={() => setMenuIsOpen(true)}>
            <Image src="/hamburger.png" width={30} height={30} alt="open menu" />
          </div>
        )}
      </div>

      {/* Overlay */}
      {menuIsOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuIsOpen(false)}
        />
      )}

      {/* Menu latéral */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/4 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuIsOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center pt-6">
          {/* Bouton fermer */}
          <div className="cursor-pointer mb-8" onClick={() => setMenuIsOpen(false)}>
            <Image src="/hamburger-color.png" width={40} height={40} alt="close menu" />
          </div>

          {/* Liens */}
          <div className="flex flex-col items-center gap-6 font-medium text-xl">
            {navItems.map((nav) => (
              <Link key={nav.id} className="" href={nav.link} onClick={() => setMenuIsOpen(false)}>
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
