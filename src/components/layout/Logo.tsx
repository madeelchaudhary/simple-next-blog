import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Next Blog"
      className="font-secondary font-bold text-2xl"
    >
      <div className="flex items-center" aria-hidden="true">
        <span className="w-9 h-9 mr-2 inline-flex items-center justify-center bg-rose-500 text-2xl text-white rounded-full">
          N
        </span>
        <span className="text-rose-500">Next_</span>
        <span className="text-gray-50">Blog</span>
      </div>
    </Link>
  );
};

export default Logo;
