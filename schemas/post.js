export default {
  name: 'post',
  title: 'Artículos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      validation: Rule => Rule.required().error('El título es obligatorio.'),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL Amigable (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Imagen Destacada',
      type: 'image',
      options: {
        hotspot: true, 
      },
      fields: [
        {
          name: 'caption',
          title: 'Leyenda de la Foto',
          type: 'string',
        },
        {
          name: 'credit',
          title: 'Crédito del Fotógrafo',
          type: 'string',
        }
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      title: 'Cuerpo del Artículo',
      type: 'blockContent', 
      validation: Rule => Rule.required(),
    },
     {
      name: 'highlight_box',
      title: 'Recuadro Destacado (Opcional)',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `por ${author}`,
      })
    },
  },
}
