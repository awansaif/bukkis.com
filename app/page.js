import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="my-5">
        <p className="text-center text-sm italic">A story of</p>
        <h1 className="text-6xl font-bold text-center uppercase">Bukkis</h1>
        <p className="text-center text-md">is Story of 6 Boys</p>

        <ul className="flex justify-center flex-wrap align-middle items-center space-x-4 text-2xl font-medium text-center text-black pt-4">
          <li className="">Basharat</li>
          <li>Usman</li>
          <li>Kashif</li>
          <li>Khalid</li>
          <li>Idrees</li>
          <li>Saif</li>
        </ul>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-6">
        <div className="relative h-full overflow-hidden rounded-lg border-2 border-gray-600">
          <Image
            src="/basharat.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover shadow block overflow-hidden"
          />
          <div className="absolute w-full bottom-0 bg-white px-4 py-4 overflow-hidden">
            <p className="text-lg text-black text-center">
              Malik Basharat Awan
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-lg border-2 border-gray-600">
          <Image
            src="/basharat.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover shadow block overflow-hidden"
          />
          <div className="absolute w-full bottom-0 bg-white px-4 py-4 overflow-hidden">
            <p className="text-lg text-black text-center">
              Malik Basharat Awan
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-lg border-2 border-gray-600">
          <Image
            src="/basharat.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover shadow block overflow-hidden"
          />
          <div className="absolute w-full bottom-0 bg-white px-4 py-4 overflow-hidden">
            <p className="text-lg text-black text-center">
              Malik Basharat Awan
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-lg border-2 border-gray-600">
          <Image
            src="/basharat.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover shadow block overflow-hidden"
          />
          <div className="absolute w-full bottom-0 bg-white px-4 py-4 overflow-hidden">
            <p className="text-lg text-black text-center">
              Malik Basharat Awan
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-lg border-2 border-gray-600">
          <Image
            src="/basharat.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover shadow block overflow-hidden"
          />
          <div className="absolute w-full bottom-0 bg-white px-4 py-4 overflow-hidden">
            <p className="text-lg text-black text-center">
              Malik Basharat Awan
            </p>
          </div>
        </div>
        <div className="relative w-full h-full overflow-hidden rounded-lg border-2 border-gray-600">
          <Image
            src="/basharat.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover shadow block overflow-hidden"
          />
          <div className="absolute w-full bottom-0 bg-white px-4 py-4 overflow-hidden">
            <p className="text-lg text-black text-center">
              Malik Basharat Awan
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-lg border-2 border-gray-600">
          <Image
            src="/basharat.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover shadow block overflow-hidden"
          />
          <div className="absolute w-full bottom-0 bg-white px-4 py-4 overflow-hidden">
            <p className="text-lg text-black text-center">
              Malik Basharat Awan
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-lg border-2 border-gray-600">
          <Image
            src="/basharat.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover shadow block overflow-hidden"
          />
          <div className="absolute w-full bottom-0 bg-white px-4 py-4 overflow-hidden">
            <p className="text-lg text-black text-center">
              Malik Basharat Awan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
