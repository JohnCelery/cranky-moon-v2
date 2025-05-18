export const metadata = { title: 'Shop' }

interface Item {
  id: number
  title: string
  url: string
  price: string
  image: string
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
  }).format(amount)
}

async function fetchListings(): Promise<Item[] | null> {
  const key = process.env.ETSY_API_KEY
  if (!key) return null
  try {
    const res = await fetch(
      'https://openapi.etsy.com/v3/application/shops/CrankyMoonCo/listings/active?limit=20&includes=images',
      {
        headers: { 'x-api-key': key },
        // do not cache so data is always fresh
        cache: 'no-store',
      },
    )
    if (!res.ok) throw new Error('Failed to fetch')
    const json = await res.json()
    return (json.results || []).map((l: any) => {
      const price = l.price
        ? l.price.amount / l.price.divisor
        : parseFloat(l.price_value || '0')
      return {
        id: l.listing_id,
        title: l.title,
        url: l.url,
        price: formatCurrency(price, l.price?.currency_code || 'USD'),
        image:
          l.images?.[0]?.url_570xN || l.Images?.[0]?.url_570xN || '/logo.svg',
      }
    })
  } catch (e) {
    console.error('Etsy fetch failed', e)
    return null
  }
}

const placeholder: Item[] = [
  {
    id: 1,
    title: 'Celestial Sticker Pack',
    url: '#',
    price: formatCurrency(8, 'USD'),
    image: '/moon.svg',
  },
  {
    id: 2,
    title: 'Lunar Notebook',
    url: '#',
    price: formatCurrency(15, 'USD'),
    image: '/logo.svg',
  },
  {
    id: 3,
    title: 'Starry Mug',
    url: '#',
    price: formatCurrency(12, 'USD'),
    image: '/moon.svg',
  },
]

export default async function ShopPage() {
  const listings = await fetchListings()
  const items = listings && listings.length > 0 ? listings : placeholder

  return (
    <main className="mx-auto max-w-5xl p-4">
      <h1 className="mb-6 text-3xl font-bold">Shop</h1>
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col overflow-hidden rounded-md border"
          >
            <img
              src={item.image}
              alt=""
              className="h-48 w-full object-cover"
              width={300}
              height={200}
            />
            <div className="flex grow flex-col gap-2 p-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.price}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block rounded bg-black px-3 py-2 text-center text-white dark:bg-white dark:text-black"
              >
                View on Etsy
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
