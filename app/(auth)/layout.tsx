import Image from "next/image";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:h-2/5">
                <div className="flex max-w-[430px] max-h-[800px] flex-col justify-normal space-y-12">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        width={224}
                        height={82}
                        alt="logo"
                        className="h-auto"
                    />

                    <div className="space-y-5 text-white">
                        <h1 className="h1">Manage your files the best way</h1>
                        <p className="body-1">This is a place where you can store all your documents.</p>
                    </div>

                    <Image
                        src="/assets/images/files.png"
                        width={342}
                        height={342}
                        alt="files"
                        className="transition-all hover:rotate-2 hover:scale-105"
                    />
                </div>
            </section>

            <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
                <div className="mb-16 lg:hidden">
                    <Image
                        src="/assets/icons/logo-full-brand.svg"
                        width={224}
                        height={82}
                        alt="logo"
                        className="h-auto w-[200px] lg:w-[250px]"
                    />
                </div>

                {children}
            </section>
        </div>
    )
}