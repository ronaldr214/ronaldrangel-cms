export default {
  name: 'author',
  title: 'Autores',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Autor',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Foto del Autor',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Biografía Corta',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
