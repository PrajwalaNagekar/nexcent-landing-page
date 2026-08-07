import landing from "@/data/landing.json";

import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
    return (
        <>
            <Navbar
                data={landing.navbar}
            />
        </>
    );
}