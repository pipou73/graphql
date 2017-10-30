let links = [
    {
        id: 1,
        url: 'http://graphql.org/',
        description: 'The Best Query Language'
    },
    {
        id: 2,
        url: 'http://dev.apollodata.com',
        description: 'Awesome GraphQL Client'
    },
];


const resolvers = {
    Query: {
        allLinks: () => links,
        getLink: (_, {id}) => {
            console.log(id);
            console.log(links.find((link) => link.id == id))

            return links.find((link) => link.id == id)
        }
    },
    Mutation: {
        createLink: (_, data) => {
            const newLink = Object.assign({id: links.length + 1}, data);
            links.push(newLink);
            return newLink;
        }
    },
};

export default resolvers;