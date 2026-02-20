"use client";

import { useContext, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  // MoonIcon, SunIcon,
} from "@heroicons/react/24/outline";
import { info, webConf } from "../data/info";
import { TbMoon as MoonIcon, TbSun as SunIcon } from "react-icons/tb";
import { ThemeContext } from "../components/ThemeContext";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex flex-nowrap items-center justify-between p-6 lg:px-8
          fixed w-full top-0 z-9999
          backdrop-blur-xl bg-app-fg/5 shadow-md shadow-app-fg/10
          py-2 lg:flex-wrap lg:justify-start lg:py-4"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            {info.logo ? (
              <>
                <span className="sr-only">{info.company}</span>
                <img alt="" src={info.logo} className="h-8 w-auto" />
              </>
            ) : (
              <span className="font-semibold text-lg tracking-wide">
                {info.title}
              </span>
            )}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            role="button"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </a>
          {webConf.hasLogin && (
            <a href="#" className="text-sm/6 font-semibold">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              {info.logo ? (
                <>
                  <span className="sr-only">{info.company}</span>
                  <img alt="" src={info.logo} className="h-8 w-auto" />
                </>
              ) : (
                <span></span>
              )}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {webConf.hasLogin && (
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              )}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
