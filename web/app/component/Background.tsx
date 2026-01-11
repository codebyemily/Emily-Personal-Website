import Image from 'next/image';
import myBackgroundImage from '@/public/dune.jpeg'; // Optional: for static import

export default function BackgroundPage() {
  return (
    // The container for both the image and the content
    <div className="relative h-screen w-screen">
      {/* The background image */}
      <Image
        src={myBackgroundImage} // or src="/background.jpg" for static path
        alt="Background"
        quality={100}
        fill // makes the image fill the parent container
        sizes="100vw"
        style={{
          objectFit: 'cover', // ensures the image covers the area and is cropped
        }}
        priority // preload the LCP image for performance
      />

      {/* The content that goes on top of the image */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-4xl">Content on top</h1>
      </div>
    </div>
  );
}
