/**
 * Dependencies
 */

import { Resolver, Query } from "type-graphql";
import { Resource } from "../models/Resource";

/**
 * Define resolver
 */

@Resolver()
export class ResourceResolver {
  @Query(() => [Resource])
  listResources() {
    return Resource.find();
  }
}
