import Image from "next/image";

export default function CompaniesStrip() {
  return (
    <div className="py-10 w-full flex items-center justify-center bg-primary">
      <div className="flex w-full justify-evenly flex-wrap items-center gap-10 px-5 max-w-7xl">
        <Image
          src="/siemens-white.svg"
          alt="Siemens"
          width={150}
          height={150}
        />
        <Image src="/bosch.svg" alt="Bosch" width={150} height={150} />
        <Image src="/lg-white.svg" alt="LG" width={150} height={150} />
        <Image src="/samsung.svg" alt="Samsung" width={150} height={150} />
      </div>
    </div>
  );
}
