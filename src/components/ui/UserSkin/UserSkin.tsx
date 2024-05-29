import React, {FC, useEffect, useRef} from "react";
import { SkinViewer, createOrbitControls } from "skinview3d";

interface SkinViewerProps {
    skinUrl: string;
    capeUrl?: string;
}

const SkinViewerComponent: FC<SkinViewerProps> = React.memo(({ skinUrl, capeUrl }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const skinViewerRef = useRef<SkinViewer | null>(null);

    if (skinUrl === '') {
        skinUrl = 'https://s.namemc.com/i/2ed42b44324732f6.png'
    }
    useEffect(() => {
        if (!canvasRef.current) return;

        const skinViewer = new SkinViewer({
            canvas: canvasRef.current,
            width: 300,
            height: 400,
            skin: skinUrl,
        });
        skinViewerRef.current = skinViewer;
        const control = createOrbitControls(skinViewer);
        control.enableRotate = true;
        control.enableZoom = true;
        control.enablePan = true;

        return () => {
            // Clean up when component unmounts
            if (skinViewerRef.current) {
                skinViewerRef.current.dispose();
            }
        };
    }, [skinUrl]);

    useEffect(() => {
        if (skinViewerRef.current && capeUrl) {
            skinViewerRef.current.loadCape(capeUrl);
        }
    }, [capeUrl]);

    return <canvas ref={canvasRef}></canvas>;
});

export default SkinViewerComponent;
