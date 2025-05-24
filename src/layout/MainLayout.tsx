"use client";
import React, {PropsWithChildren} from 'react';
import {initParseInClientSide} from "@/utils/parse";

initParseInClientSide()

interface Props extends PropsWithChildren {
}

const MainLayout = (props: Props) => {
    const {children} = props;
    return (
        <div>
            {children}
        </div>
    );
};

export default MainLayout;
