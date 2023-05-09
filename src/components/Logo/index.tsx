import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  color?: "white" | "black";
  width?: number;
  height?: number;
  redirectLink?: string;
}
const Logo = ({ color = "black", width, height, redirectLink }: LogoProps) => {
  const logoUrl =
    color === "white" ? "/images/logo-white.png" : "/images/logo-black.png";
  return (
    <>
      {redirectLink ? (
        <Link
          legacyBehavior
          href={redirectLink}
          className="flex"
          id="logo-link"
        >
          <a className="flex">
            <Image
              src={logoUrl}
              alt="logo"
              width={width ? width : 153}
              height={height ? height : 36}
              id="site-logo"
            />
          </a>
        </Link>
      ) : (
        <Image
          src={logoUrl}
          alt="logo"
          width={width ? width : 87}
          height={height ? height : 29}
          id="site-logo"
        />
      )}
    </>
  );
};

export default Logo;
