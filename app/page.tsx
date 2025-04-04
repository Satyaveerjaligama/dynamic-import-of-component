import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/without-dynamic-import">Without Dynamic Import</Link>
      <br></br>
      <Link href="/with-dynamic-import">With Dynamic Import</Link>
    </div>
  );
}
