import Image from "next/image";
import Search from "./Search";
import FileUploader from "./FileUploader";

export default function Header() {
    return (
        <header className="header">
            <Search />

            <div className="header-wrapper">
                <FileUploader />

                <form action="">
                    <button type="submit" className="sign-out-button">
                        <Image
                            src="/assets/icons/logout.svg"
                            width={24}
                            height={24}
                            alt="logo"
                            className="h-6"
                        />
                    </button>
                </form>
            </div>
        </header>
    )
}