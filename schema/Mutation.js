import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

let MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    pong: {
      type: GraphQLString,
      description: 'A pong to make sure the GraphQL server is actually responding',
      resolve: () => 'ping'
    }
  })
});

export default MutationType;
