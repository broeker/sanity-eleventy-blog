export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f81305a42c40bae14fa2a33',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-89qogobe',
                  apiId: 'ff4a161a-cbf6-4afd-858a-92be9c7a402b'
                },
                {
                  buildHookId: '5f81305ad1e6209e8dc0c844',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-n1roatkz',
                  apiId: 'c407178f-e7f9-4fc8-b853-798bb4efb4ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/broeker/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-n1roatkz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
