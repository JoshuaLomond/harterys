import { client } from '../../lib/sanity'

interface MenuItem {
  _id: string
  name: string
  description?: string
  price: number
  category: string
}

async function getMenuItems(): Promise<MenuItem[]> {
  const query = `*[_type == "menuItem"] | order(category asc, name asc)`
  const menuItems = await client.fetch(query)
  return menuItems
}

export default async function FullMenu() {
  const menuItems = await getMenuItems()

  const groupedMenuItems: { [key:string]: MenuItem[] } = menuItems.reduce(
    (acc, item) => {
      ;(acc[item.category] = acc[item.category] || []).push(item)
      return acc
    },
    {} as { [key: string]: MenuItem[] },
  )

  const categoryTitles: { [key: string]: string } = {
    'appetizers': 'Appetizers',
    'main-courses': 'Main Courses',
    'desserts': 'Desserts',
    'beverages': 'Beverages',
  }

  const categoryOrder = ['appetizers', 'main-courses', 'desserts', 'beverages'];

  return (
    <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
      <h3 className="text-2xl font-bold tracking-tight text-dark-charcoal sm:text-3xl font-serif text-center mb-10">
        Full Menu
      </h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
        {categoryOrder.map((category) => {
          const items = groupedMenuItems[category]
          if (!items || items.length === 0) return null

          return (
            <div key={category}>
              <h4 className="text-xl font-semibold text-dark-charcoal mb-4">
                {categoryTitles[category] || category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item._id}
                    className="flex justify-between items-baseline"
                  >
                    <span className="text-lg text-dark-charcoal">
                      {item.name}
                    </span>
                    <span className="text-lg text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
