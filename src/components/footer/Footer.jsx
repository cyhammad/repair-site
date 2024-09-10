import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative flex flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1F242E"
          fillOpacity="1"
          d="M0,256L26.7,266.7C53.3,277,107,299,160,288C213.3,277,267,235,320,229.3C373.3,224,427,256,480,240C533.3,224,587,160,640,160C693.3,160,747,224,800,224C853.3,224,907,160,960,122.7C1013.3,85,1067,75,1120,85.3C1173.3,96,1227,128,1280,128C1333.3,128,1387,96,1413,80L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-secondary text-white flex flex-col items-center justify-center w-full">
        <div className="grid w-full max-w-6xl px-5 pt-10 pb-20 gap-8 sm:grid-cols-[1fr_0.5fr_0.5fr]">
          <div className="flex flex-col max-w-[75%] gap-5">
            <h1 className="text-4xl">LogoHere</h1>
            <span className="text-white/90">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              quidem optio perferendis nobis ut expedita ipsa deleniti, minima
              unde, temporibus, quia porro iure explicabo et sed.
            </span>
          </div>
          <div className="flex flex-col text-white/75 w-full gap-2">
            <h1 className="text-xl font-black text-white">Quick Links</h1>
            <Link className="hover:text-white" href="/">
              Home
            </Link>
            <Link className="hover:text-white" href="/about">
              About us
            </Link>
            <Link className="hover:text-white" href="/services">
              Services
            </Link>
            <Link className="hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-col text-white/75 w-full gap-2">
            <h1 className="text-xl font-black text-white">Hire Us</h1>
            <span className="text-white/90">
              You can hire us using call or whatsapp. We are available 24/7 to
              help you.
            </span>
            <Link
              href="tel:+923000000000"
              className="mt-2 text-primary/80 hover:text-primary"
            >
              Call us now
            </Link>
            <Link
              href="https://wa.me/+923000000000"
              className="text-primary/80 hover:text-primary"
            >
              Talk on whatsapp
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 w-full flex items-center justify-center">
          &copy; 2024 LogoHere. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
