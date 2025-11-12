import {defineField, defineType} from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Appetizers', value: 'appetizers'},
          {title: 'Main Courses', value: 'main-courses'},
          {title: 'Desserts', value: 'desserts'},
          {title: 'Beverages', value: 'beverages'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
