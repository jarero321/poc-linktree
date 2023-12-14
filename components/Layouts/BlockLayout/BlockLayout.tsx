import ImageSwitcher from '../../ImageSwitcher/ImageSwitcher';

interface BlockLayoutProps {
  isBackgroundImage: boolean;
  backgroundImage: {};
  backgroundColor: string;
}
const BlockLayout: React.FC<BlockLayoutProps> = ({
  isBackgroundImage,
  backgroundImage,
  backgroundColor,
}) => {
  return (
    <main className="w-screen h-screen">
      <ImageSwitcher
        background={{
          urlDesktop: '',
          alt: '',
          urlMobile: '',
        }}
        isBackgroundImage={isBackgroundImage}
      ></ImageSwitcher>
    </main>
  );
};

export default BlockLayout;
