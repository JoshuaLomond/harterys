import { client } from "../../lib/sanity";

interface MenuItem {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
}

async function getMenuItems(): Promise<MenuItem[]> {
  const query = `*[_type == "menuItem"] | order(category asc, name asc)`;
  const menuItems = await client.fetch(query);
  return menuItems;
}

export default async function FullMenu() {
  const menuItems = await getMenuItems();

  const groupedMenuItems: { [key: string]: MenuItem[] } = menuItems.reduce(
    (acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    },
    {} as { [key: string]: MenuItem[] }
  );

  const categoryTitles: { [key: string]: string } = {
    appetizers: "Appetizers",
    "main-courses": "Main Courses",
    desserts: "Desserts",
    beverages: "Beverages",
  };

  const categoryOrder = ["appetizers", "main-courses", "desserts", "beverages"];

  return (
    <div className="mx-auto mt-16 w-full max-w-5xl lg:max-w-none">
      <h3 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-4xl font-serif text-center mb-12">
        Full Menu
      </h3>
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
        {categoryOrder.map((category) => {
          const items = groupedMenuItems[category];
          if (!items || items.length === 0) return null;

          return (
            <div
              key={category}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h4 className="text-2xl font-serif font-bold text-primary mb-6 border-b pb-2">
                {categoryTitles[category] || category}
              </h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-end justify-between gap-4"
                  >
                    <div className="flex flex-col">
                      <span className="text-lg font-medium text-dark-charcoal">
                        {item.name}
                      </span>
                      {item.description && (
                        <span className="text-sm text-gray-500 italic">
                          {item.description}
                        </span>
                      )}
                    </div>
                    <div className="flex-grow border-b-2 border-dotted border-gray-300 mb-2 mx-2 opacity-50"></div>
                    <span className="text-lg font-bold text-primary whitespace-nowrap">
                      ${item.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
