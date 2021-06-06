import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { HelloResolver } from './resolvers/hello'
import { buildSchema } from 'type-graphql';
import { Context } from './types'


const main = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false,
        }),
        context: ({ req, res }): Context => ({ req, res }),
    })

    apolloServer.applyMiddleware({
        app,
    })
    app.get("/", (_: Request, res: Response) => res.send('This is Working'));
    app.listen(3000, () => console.log('Server started at PORT 3000'));
}

main().catch(err => {
    console.error(err)
});