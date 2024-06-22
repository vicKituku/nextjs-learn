import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/app/components/Modal";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white py-4">
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
