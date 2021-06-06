import { Query, Resolver } from 'type-graphql';

@Resolver()
export class HelloResolver{
    @Query(() => String)
    async hello(){
        return `Hello From Apollo Server, Here is your random number: ${Number(Math.random()) * 100}`;
    }
}