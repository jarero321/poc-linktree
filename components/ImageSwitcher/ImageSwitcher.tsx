'use client';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import Image from 'next/image';
interface ImageSwitcherProps {
  isBackgroundImage?: boolean;
  backgroundColor?: string;
  children?: JSX.Element;
  background: {
    urlMobile: string;
    urlDesktop: string;
    alt: string;
  };
}
const ImageSwitcher: React.FC<ImageSwitcherProps> = ({
  background,
  children,
  backgroundColor,
  isBackgroundImage,
}) => {
  const { isMobile } = useScreenDetector();

  if (!isBackgroundImage) {
    return <section className="w-full h-full">{children}</section>;
  }

  return (
    <section
      className={`w-full h-full absolute top-0 left-0 ${backgroundColor} `}
    >
      <picture>
        <Image
          src={isMobile ? background.urlMobile : background.urlDesktop}
          alt={background.alt}
        />
      </picture>
      {children}
    </section>
  );
};

export default ImageSwitcher;
