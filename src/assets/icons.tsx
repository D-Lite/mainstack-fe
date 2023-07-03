// LATEST UPDATE: 2020 June 23, 10:07pm by Andric

import * as React from "react";

const viewBoxes = {
    "16": "0 0 16 16",
    "12": "0 0 12 12",
    "10": "0 0 10 10"
};

//
// SVG icons with a 16px * 16px viewbox
//

export const icons16 = {
    alert16: {
        path: (
            <path
                fill="currentColor"
                d="M11.314 0H4.686L0 4.686v6.628L4.686 16h6.628L16 11.314V4.686L11.314 0zM8 12a.946.946 0 01-1-1 .945.945 0 011-1 .945.945 0 011 1 .945.945 0 01-1 1zm1-3H7V4h2v5z"
            />
        ),
        viewBox: viewBoxes["16"]
    },
    dashboard16: {
        path: (
            <path
                d="M11.25 7.49992V3.33325H16.6667V7.49992H11.25ZM3.33337 9.99992V3.33325H8.75004V9.99992H3.33337ZM11.25 16.6666V9.99992H16.6667V16.6666H11.25ZM3.33337 16.6666V12.4999H8.75004V16.6666H3.33337ZM4.16671 9.16658H7.91671V4.16659H4.16671V9.16658ZM12.0834 15.8333H15.8334V10.8333H12.0834V15.8333ZM12.0834 6.66659H15.8334V4.16659H12.0834V6.66659ZM4.16671 15.8333H7.91671V13.3333H4.16671V15.8333Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        ),
        viewBox: viewBoxes["16"]
    },
    all16: {
        path: (
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 1H5v2h11V1zm-4 4H5v2h7V5zM0 9h3v2H0V9zm5 0h11v2H5V9zm6 4H5v2h6v-2zM0 13h3v2H0v-2zm0-8h3v2H0V5zm0-4h3v2H0V1z"
                clipRule="evenodd"
            />
        ),
        viewBox: viewBoxes["16"]
    },
    auto16: {
        path: (
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1-2-1zm10 4l2-1 2 1-1-2 1-2-2 1-2-1 1 2-1 2zm0 10l1-2-1-2 2 1 2-1-1 2 1 2-2-1-2 1zM8.94 4.939L6.291 7.586l2.122 2.121L11.06 7.06 8.94 4.94zM0 13.879l5.587-5.587 2.121 2.122L2.122 16 .001 13.878z"
                clipRule="evenodd"
            />
        ),
        viewBox: viewBoxes["16"]
    },
    clock16: {
        path: (
            <path
                fill="currentColor"
                d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H7V4h2v3h3v2z"
            />
        ),
        viewBox: viewBoxes["16"]
    },
}; 