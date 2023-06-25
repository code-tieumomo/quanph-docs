import React, { Fragment, useState } from "react";
import { useThemeConfig, ErrorCauseBoundary } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
import styles from "./styles.module.css";
import { auth, loginWithGoogle } from "../../../services/firebase";
import { Menu, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}
function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === "search");
  const [authUser, setAuthUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  });

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />

          <div className="hidden lg:flex w-px h-4 bg-gray-200 mx-4"></div>

          {authUser ? (
            <div className="lg:flex items-center gap-2 hidden">
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-gray-900 truncate mb-0 dark:text-white">
                  {authUser.displayName}
                </span>
                <span className="text-xs font-normal text-gray-500 truncate mb-0 dark:text-gray-200">
                  {authUser.email}
                </span>
              </div>
              <Menu as="div" className="">
                <Menu.Button
                  as="img"
                  className="w-8 h-8 rounded-full align-middle shrink-0 cursor-pointer"
                  src={authUser.photoURL}
                  alt="Neil image"
                />

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-4 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-[rgba(0,0,0,0.16)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px]">
                    <div className="px-1 py-1 space-y-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              toast("Chức năng đang phát triển", {
                                icon: "🚧",
                                style: {
                                  fontSize: "0.75rem",
                                  padding: "0.5rem 1rem",
                                  boxShadow:
                                    "rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px",
                                },
                              });
                            }}
                            className={`${
                              active
                                ? "!bg-emerald-500 text-white"
                                : "text-gray-700"
                            } group flex w-full items-center rounded-md px-2 py-1 text-xs font-medium bg-transparent`}
                          >
                            Tools
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => auth.signOut()}
                            className={`${
                              active
                                ? "!bg-emerald-500 text-white"
                                : "text-gray-700"
                            } group flex w-full items-center rounded-md px-2 py-1 text-xs font-medium bg-transparent`}
                          >
                            Đăng xuất
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <button
              onClick={loginWithGoogle}
              className="bg-green-500 text-white shrink-0 hover:bg-green-600 font-bold text-xs !px-2 py-1.5 rounded cursor-pointer shadow outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              Lecturer ?
            </button>
          )}
        </>
      }
    />
  );
}
