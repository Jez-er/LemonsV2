import React, { useEffect, useRef } from 'react';

interface Skin {
    url: string;
}

interface AvatarProps {
    skin: Skin;
    userName: string
}

const UserAvatar: React.FC<AvatarProps> = ({ skin, userName }) => {
    const avatarRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const updateAvatar = (skinurl: Skin) => {
            if (!skinurl) {
                return;
            }
            const canvas = document.createElement("canvas");
            const context = canvas.getContext('2d');
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = function () {
                const scale = img.naturalWidth / 64;
                const headpos = scale * 8;
                canvas.width = headpos;
                canvas.height = headpos;
                if (context) { // Check if context is not null
                    context.drawImage(img, headpos /*sourceX*/, headpos /*sourceX*/, headpos /*sourceWidth*/, headpos /*sourceHeight*/,
                        0 /*destX*/, 0/*destY*/, headpos /*destWidth*/, headpos /*destHeight*/);
                    context.drawImage(img, headpos * 5 /*sourceX*/, headpos /*sourceY*/, headpos /*sourceWidth*/, headpos /*sourceHeight*/,
                        0 /*destX*/, 0/*destY*/, headpos /*destWidth*/, headpos /*destHeight*/);
                }
                if (avatarRef.current) {
                    avatarRef.current.src = canvas.toDataURL("image/png");
                }
            };
            img.src = skinurl.url;
        }

        updateAvatar(skin);

    }, [skin]);

    return ( <div>
            {skin ? <img style={{imageRendering: 'pixelated', borderRadius: '20px'}} ref={avatarRef} width={40}/>
            : <div className={'rounded-3xl flex justify-center items-center bg-white dark:bg-black dark:text-white w-9 h-9'}>{userName.charAt(0)}</div>}
        </div>

    );
}

export {UserAvatar}