import Link from "next/link"
import Navigation from "./_components/Navigation"

export default function Page() {
  return (
   <div>
    <h1>The WildOasis. Welcome to Paradise!!</h1>

    <Link href='/cabins'>
        Explore Luxury Cabins
    </Link>
   </div>
  )
}
