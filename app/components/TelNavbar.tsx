'use client'
import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Menu } from '@mantine/core';
import NavbarLinks from './NavbarLinks';
import Image from 'next/image';

export default function TelNavbar() {
    const [opened, { toggle }] = useDisclosure();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && opened && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
            )}

            <div className='lg:hidden flex justify-between items-center  mx-auto p-4 shadow-md fixed w-full bg-white max-h-20 z-20'>
                <Image width={645} height={640} className='w-20' src="/assets/logo.jpg" alt='logo'/>
                <div className='flex flex-col px-4'>
                    <Burger className='' opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                    {opened && (
                        <div>
                            <Menu>
                                <Menu.Item><NavbarLinks/></Menu.Item>
                            </Menu>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
