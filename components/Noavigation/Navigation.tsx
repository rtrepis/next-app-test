import Link from "next/link";

const Navigation = (): JSX.Element => {
  return (
    <>
      <Link href={"/"}>
        <a> Home </a>
      </Link>
      <Link href={"/list"}>
        <a> ListPage </a>
      </Link>
    </>
  );
};

export default Navigation;
