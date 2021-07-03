import { getSession } from 'next-auth/client'
import { signOut } from 'next-auth/client'

function ProtectedPage() {
  return (
    <>
      <p>You can see this page, because you are logged in.</p>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth/loginExample',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default ProtectedPage
