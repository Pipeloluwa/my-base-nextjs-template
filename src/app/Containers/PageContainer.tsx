"use client";
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state_management/stores/store';
import { setNavBg } from '../state_management/reducers/client-reducers/navBgState';
import NavBarComponent from '../components/shared-components/NavBarComponent';
import { FooterComponent } from '../components/shared-components/FooterComponent';

const PageContainer = ({children}: {children:React.ReactNode;})=> {
  const navValue= useSelector((state:RootState) => state.navValue.value);
  const parentDivRef :React.MutableRefObject<HTMLDivElement | null>= useRef(null);
  const dispatch= useDispatch();

  useEffect(() => {
    const handleScroll= () => {
      dispatch(setNavBg({scrollValue: parentDivRef.current?.scrollTop}));
    }

    if (parentDivRef.current){
      parentDivRef.current.addEventListener('scroll', handleScroll) 
    }


  }, [navValue]);


  
  return (
    <div ref={parentDivRef} className='h-screen overflow-hidden overflow-y-scroll bg-white'>
      <NavBarComponent />
        {children}
      <FooterComponent />
    </div>
  )
}

export default PageContainer;