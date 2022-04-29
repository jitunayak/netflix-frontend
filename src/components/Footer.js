import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-black text-white p-4 text-center " >
            <div className="flex flex-col justify-center">
                <p className="text-white text-xs" style={{ fontSize: 8 }}>
                    Netflix is a registered trademark of Netflix, Inc.
                </p >
                <p className="text-white" style={{ fontSize: 8 }}>
                    2021-2022- Netflix-Clone inc</p>
            </div>
        </footer>
    )
}