import React, { useEffect, useState } from 'react'

import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Drawer, {
    DrawerContainer,
    MainContentContainer,
} from "react-swipeable-drawer";

import { RootState } from '../types'

import { setTab } from '../slices/tab'

const Header: React.FC = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [translation, setTranslation] = useState(0)

    useEffect(() => {
        switch (router.pathname) {
            case "/":
                dispatch(setTab(0))
                break;
            case "/pricing":
                dispatch(setTab(1))
                break;
            case "/skipper":
                dispatch(setTab(2))
                break;
            case "/contact":
                dispatch(setTab(3))
                break;
        }
    }, [router.pathname])

    const tab = useSelector((state: RootState) => state.tabState.index);

    const baseStyle = {
        fontFamily: 'Gilroy',
        fontSize: 20,
        fontWeight: 500,
        width: 139,
        height: 60,
    }

    const handleShowDrawer = () => {
        setTranslation(100)
    }

    const toggleDrawer = () => {
        if (translation === 0) setTranslation(100)
        else setTranslation(0)
    }

    return (
        <>
            <div className="block md:hidden">
                <Drawer position="left" size={50}>
                    {({ position,
                        size,
                        swiping,
                        // translation,
                        mainContentScroll,
                        // toggleDrawer,
                        handleTouchStart,
                        handleTouchMove,
                        handleTouchEnd,
                    }) => (<div>
                        <DrawerContainer
                            position={position}
                            size={size}
                            swiping={swiping}
                            translation={translation}
                            toggleDrawer={toggleDrawer}
                            handleTouchStart={handleTouchStart}
                            handleTouchMove={handleTouchMove}
                            handleTouchEnd={handleTouchEnd}
                            drawerContent={
                                <ul className="h-full text-dark bg-white">
                                    {["Home", "Pricing", "Skipper", "Contact"].map((title, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2"
                                            style={{ fontFamily: 'Gilroy', fontSize: 20, fontWeight: 500 }}
                                        >
                                            <Link href={index === 0 ? "/" : title.toLowerCase()}>
                                                {title}
                                            </Link>
                                        </li>)
                                    )}
                                </ul>
                            }
                        />
                    </div>)}
                </Drawer>
            </div>
            <div className='flex flex-wrap pt-8 lg:pt-16'>

                <div className="w-full md:w-1/2 flex pl-2 md:pl-16 lg:pl-32 xl:pl-64">
                    <button
                        className='block md:hidden px-4 mr-4 rounded-full'
                        style={{ outline: 'none' }}
                        onClick={handleShowDrawer}
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            size="lg"
                        />
                    </button>
                    <img src="logo.png" style={{ height: 48 }} />
                </div>
                <ul className="hidden md:flex w-full md:w-1/2 justify-center mt-4 text-dark">
                    {["Home", "Pricing", "Skipper", "Contact"].map((title, index) => (
                        <li className={"text-center block rounded-full flex justify-center items-center" + (index < 3 ? " mr-2" : "")}
                            style={
                                tab === index ?
                                    { ...baseStyle, background: 'linear-gradient(180deg, #D3D9DC 0%, #FBFBFB 100%)' } :
                                    { ...baseStyle }} key={index} >

                            <Link href={index === 0 ? "/" : title.toLowerCase()}>
                                {title}
                            </Link>

                        </li>)
                    )}
                </ul>
            </div >
        </>
    )
}

export default Header