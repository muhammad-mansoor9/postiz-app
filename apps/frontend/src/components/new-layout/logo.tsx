'use client';

import SafeImage from '@gitroom/react/helpers/safe.image';

export const Logo = () => {
  return (
    <SafeImage
      src="/logo-small.png"
      width={60}
      height={60}
      alt="Logo"
      className="mt-[8px] min-w-[60px] min-h-[60px] w-[60px] h-[60px] object-contain"
    />
  );
};
