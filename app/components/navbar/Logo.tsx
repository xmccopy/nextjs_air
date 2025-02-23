"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push('/')}
            className="hidden md:block cursor-pointer"
            src="/images/airbnb.png"
            alt="Logo"
            height={100}
            width={100}
        />
    );
};

export default Logo;