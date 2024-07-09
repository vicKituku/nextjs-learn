import PhotoDisplay from "@/app/components/PhotoDisplay";
import type { PhotoData } from "@/app/page";
import { Modal } from "@/app/components/Modal";

// type Props = {
//   params: {
//     photoId: string;
//   };
// };

export default async function Photo({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:3500/images/${params.id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return <h1>Failed to fetch</h1>;
  }

  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
    return <h1 className="text-center">No Photo Found for that ID.</h1>;
  }

  return (
    <Modal>
      <PhotoDisplay photoData={photoData} />
    </Modal>
  );
}
