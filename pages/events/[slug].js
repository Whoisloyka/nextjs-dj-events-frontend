import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"
export default function EventPage({ evt }) {
  return (
    <Layout>
      <h1>My Event</h1>
      <h3>{evt.name}</h3>

      {/* useRouter yönlendirme */}
      <button onClick={() => router.push("/")}>click</button>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()

  return {
    props: {},
  }
}
