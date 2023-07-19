const home = {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'heading' }
        },
        {
          name: 'intro',
          title: 'Intro',
          type: 'array',
          of: [{ type: "block" }],  
        }
    ]
}

export default home;