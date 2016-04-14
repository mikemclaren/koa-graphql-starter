import {
  GraphQLSchema,
} from 'graphql';

import QueryType from './Query';
import MutationType from './Mutation';

let Schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

export default Schema;
