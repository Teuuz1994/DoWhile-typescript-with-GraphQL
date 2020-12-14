import { Field, ObjectType } from "type-graphql"

@ObjectType()
class Category {
  @Field()
  _id: string

  @Field()
  name: string

  @Field()
  description: string
}

export default Category