import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <p className="text-md py-2 font-semibold  uppercase"> Information</p>
      <h1 className="text-center text-5xl">
        Contact <span className="font-bold">Us</span>{" "}
      </h1>
      <p className="mx-10 pt-6 text-center text-xl text-violet-500 md:mx-40">
        Have a great idea? Let&apos;s get in touch. The coffee is on us!
      </p>
      <div className="flex items-center justify-center gap-10">
        <div className="group my-10 flex h-12 w-80 cursor-pointer  items-center justify-center rounded-md border  border-violet-500 hover:bg-violet-500 hover:shadow-lg md:w-72">
          <Link href="#" passHref>
            <h1 className="text-xl text-violet-500 group-hover:text-white">
              Get In Touch
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
