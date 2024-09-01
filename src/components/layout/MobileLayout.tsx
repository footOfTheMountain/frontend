"use client";

import React, { ReactNode } from 'react';
import styles from './MobileLayout.module.css';
import LayoutHeader from '@components/header';
import LayoutFooter from '@components/footer';

interface MobileLayoutProps {
    children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles["inner-container"]}>
                <LayoutHeader />
                <main className={styles.main}>
                    {children}
                </main>
                <LayoutFooter />
            </div>
        </div>
    );
};

export default MobileLayout;
