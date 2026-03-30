import { person } from "@/data/person"

export default function PersonSection() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {person.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            className="rounded-xl"
          />
        ))}
      </div>
    </div>
  )
}