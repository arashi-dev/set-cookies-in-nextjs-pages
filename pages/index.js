import { setCookie } from "cookies-next"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Check the cookies in developer tools
      </p>

      <Link href="/api/set-cookie">Set cookie from API</Link>
    </div>
  );
}

export const getServerSideProps = ({ req, res }) => {
  setCookie('token_from_getServerSideProps', 'abc123', {
    req,
    res,
    maxAge: 60 * 60 * 24 * 1000,
  })

  return { props: {} }
}
