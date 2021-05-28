import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema, Resolver, Query } from "type-graphql";

@Resolver()
class HelloResolver {
    @Query(() => String) //a field for querying - query decorator // then declares what type the resolver should return (String)
    async hello() {
        //this function is the name inside of the query
        return "Hello World";
    }
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver],
    });

    const apolloServer = new ApolloServer({schema});
    const app = Express();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log("Server started and running on port 4000")
    })
};

main();
