import Image from "next/image";

export default function OurFeatures() {
  return (
    <div className="flex items-center justify-center py-10 w-full">
      <div className="flex flex-col max-w-7xl gap-10 px-5 items-center">
        <h1 className="text-5xl font-black">Our Features</h1>
        <div className="grid md:grid-cols-3 gap-10 p-10">
          <div className="flex flex-col gap-3 px-10 items-center justify-center text-center">
            <Image
              src="/feature1.svg"
              width={100}
              height={100}
              alt="feature1"
            />
            <h1 className="text-3xl font-black">Loyalty</h1>
            <span className="text-black/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dicta recusandae odit at fugiat?
            </span>
          </div>
          <div className="flex flex-col gap-3 px-10 items-center justify-center text-center">
            <Image
              src="/feature2.svg"
              width={100}
              height={100}
              alt="feature2"
            />
            <h1 className="text-3xl font-black">Usability</h1>
            <span className="text-black/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dicta recusandae odit at fugiat?
            </span>
          </div>
          <div className="flex flex-col gap-3 px-10 items-center justify-center text-center">
            <Image
              src="/feature3.svg"
              width={100}
              height={100}
              alt="feature3"
            />
            <h1 className="text-3xl font-black">Trust</h1>
            <span className="text-black/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dicta recusandae odit at fugiat?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
