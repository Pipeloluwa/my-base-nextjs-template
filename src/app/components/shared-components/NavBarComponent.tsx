"use client";
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/state_management/stores/store';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { Drawer } from '@material-tailwind/react';
import { IoCloseSharp } from 'react-icons/io5';
import LogoComponent from './LogoComponent';
import { rootUrl } from '@/app/variables/sharedVariables';


const NavBarComponent = () => {

    const navBgState = useSelector((state: RootState) => state.navBgState.value);
    const navValue = useSelector((state: RootState) => state.navValue.value);
    const [navValueLocal, setNavBgTypeLocal] = useState(navValue)

    const navItemValues = {
        "firstSegment": ["Home", "About", "Contact", "Services"],
        "secondSegment": ["Start"]
    }


    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const openDrawer_ = () => {

        setOpenDrawer(true);
        document.body.style.overflow = "hidden";
    }

    const closeDrawer_ = () => {
        setOpenDrawer(false);
        document.body.style.overflow = "unset";
    }

    useEffect(() => {
        setNavBgTypeLocal(navValue)
    }, [navValue])



    return (
        <nav
            className={`
                ${navBgState
                    ? " transition-all duration-700 bg-transparent shadow-md"
                    : "text-white from-black to-transparent bg-gradient-to-b"} 
                        text-white font-bold z-40 overflow-hidden sticky top-0 h-[80px] w-full  
                        flex justify-between items-center tracking-widest hover:shadow-none`}
        >


                
            {
                openDrawer
                    ?
                    <Drawer

                        open={openDrawer}
                        onClose={() => { closeDrawer_() }}
                        placement='right'
                        size={400}
                        overlay={false}

                        className='lg:hidden visible fixed top-0 bottom-0 flex justify-start flex-col md:w-[50%] w-[70%] h-screen bg-gradient-to-b from-gray-900 to-black'
                        placeholder={""} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                    >


                        <div className='fixed right-0 flex justify-end items-end'>
                            <IoCloseSharp onClick={() => { closeDrawer_() }} className="h-20 cursor-pointer size-[50px] mr-4 " />
                        </div>



                        <div className='flex flex-col gap-y-16 w-full h-full items-start pl-6 overflow-hidden'>

                            <div className='pt-16 flex flex-col items-start overflow-hidden overflow-y-scroll pr-[70px] w-full h-full justify-between gap-y-12'>

                                <ul className='w-full flex flex-col gap-y-8 py-4 font-bold text-sm'>

                                    {
                                        navItemValues.firstSegment.map((item, index) =>

                                            <Link href={`${rootUrl}`}
                                                onClick={closeDrawer_}
                                                key={`navItemValueMobile${index}`}
                                                className={`cursor-pointer ${navValueLocal === item ? 'bg-white shadow-gray-500 text-orange-600' : ''} p-2 px-4 ml-2 transition-colors duration-300 ease-linear rounded-2xl`}>
                                                {item}
                                            </Link>
                                        )

                                    }




                                </ul>

                            </div>
                        </div>

                    </Drawer>


                    : ""
            }






            <div className={`${navBgState ? "translate-y-0 duration-700 ease-linear bg-black" : "-translate-y-24"} backdrop-blur-md absolute left-0 right-0 h-full flex`} />


            <div className=" absolute left-0 right-0 flex w-[90%] gap-x-4 mx-auto justify-between items-center text-[14px]">

                <ul className='flex justify-center items-center'>
                    <li className='flex rounded-xl overflow-hidden size-[50px]'>
                        <LogoComponent />
                    </li>
                </ul>



                <ul className='lg:flex hidden w-full gap-x-6 justify-center items-center'>

                    {
                        navItemValues.firstSegment.map((item, index) =>
                            <Link
                                key={`navItemValueLarge${index}`}
                                href={`${rootUrl}`}
                                className={`cursor-pointer ${navValueLocal === 'Home' ? 'bg-white shadow-gray-500 text-orange-600' : ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-2xl transition-colors duration-300 ease-linear`}>
                                {item}
                            </Link>
                        )

                    }

                </ul>




                <ul className='lg:flex hidden justify-end items-center gap-x-[20px] text-[13px]'>

                    {
                        navItemValues.secondSegment.map((item, index) =>
                            <Link
                                key={`navItemValueLarge${index}`}
                                href={`${rootUrl}`}
                                className={` cursor-pointer border-2 text-white border-white bg-transparent h-10 min-w-[150px] flex justify-center items-center rounded-lg text-center shadow-sm shadow-gray-700`}>
                                {item}
                            </Link>
                        )

                    }

                </ul>



                <ul className='lg:hidden flex w-full justify-end'>
                    {
                        !openDrawer
                        && <TiThMenu onClick={() => { openDrawer_() }} className="cursor-pointer text-white size-[45px]" />
                    }
                </ul>


            </div>



            {
                openDrawer
                && <div className="z-50 lg:hidden fixed left-0 right-0 top-0 bottom-0 bg-black/50 backdrop-blur-sm w-screen h-screen" />
            }

        </nav>
    );
}

export default NavBarComponent