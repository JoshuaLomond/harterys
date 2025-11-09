export default function FullMenu() {
  return (
    <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
      <h3 className="text-2xl font-bold tracking-tight text-dark-charcoal sm:text-3xl font-serif text-center mb-10">
        Full Menu
      </h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
        {/* Appetizers */}
        <div>
          <h4 className="text-xl font-semibold text-dark-charcoal mb-4">
            Appetizers
          </h4>
          <ul className="space-y-2">
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Item Name 1</span>
              <span className="text-lg text-primary">$9.99</span>
            </li>
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Item Name 2</span>
              <span className="text-lg text-primary">$12.50</span>
            </li>
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Item Name 3</span>
              <span className="text-lg text-primary">$8.75</span>
            </li>
          </ul>
        </div>

        {/* Main Courses */}
        <div>
          <h4 className="text-xl font-semibold text-dark-charcoal mb-4">
            Main Courses
          </h4>
          <ul className="space-y-2">
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Main Course 1</span>
              <span className="text-lg text-primary">$18.99</span>
            </li>
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Main Course 2</span>
              <span className="text-lg text-primary">$22.00</span>
            </li>
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Main Course 3</span>
              <span className="text-lg text-primary">$16.50</span>
            </li>
          </ul>
        </div>

        {/* Desserts */}
        <div>
          <h4 className="text-xl font-semibold text-dark-charcoal mb-4">
            Desserts
          </h4>
          <ul className="space-y-2">
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Dessert 1</span>
              <span className="text-lg text-primary">$6.99</span>
            </li>
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Dessert 2</span>
              <span className="text-lg text-primary">$7.50</span>
            </li>
          </ul>
        </div>

        {/* Beverages */}
        <div>
          <h4 className="text-xl font-semibold text-dark-charcoal mb-4">
            Beverages
          </h4>
          <ul className="space-y-2">
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Beverage 1</span>
              <span className="text-lg text-primary">$2.99</span>
            </li>
            <li className="flex justify-between items-baseline">
              <span className="text-lg text-dark-charcoal">Beverage 2</span>
              <span className="text-lg text-primary">$3.50</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
