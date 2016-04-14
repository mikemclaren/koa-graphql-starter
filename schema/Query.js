import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

let QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ping: {
      type: GraphQLString,
      description: 'A ping to make sure the GraphQL server is actually responding',
      resolve: () => 'pong'
    }
  })
});

export default QueryType;
