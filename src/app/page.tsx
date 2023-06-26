import { Suspense } from "react";
import { ThreeItemGrid } from "@/components/grid/three-items";
import { Carousel } from "@/components/carousel";

export default async function HomePage() {
    return (
        <>
            <ThreeItemGrid />
            <Suspense fallback={<div>Loading...</div>}>
                <Carousel />
            </Suspense>
        </>
    );
}
