import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-zinc-800 py-12 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-full overflow-hidden max-w-[288px] max-h-72">
            <Image
              className="object-center object-cover w-full h-full shadow-inner saturate-50"
              src="/imgs/profile.jpg"
              alt="John Doe"
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-slate-300">Hi I&apos;m John Doe</h1>
          <p className="text-xl text-center max-w-4xl text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab
            iure, odit sequi illum nam mollitia doloribus optio natus, vel
            quibusdam ducimus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
