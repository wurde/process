/**
 * Dependencies
 */

import { Resolver, Query } from "type-graphql";
import Resource from "../models/Resource";

/**
 * Define resolver
 */

@Resolver()
class ResourceResolver {
  @Query(() => [Resource])
  listResources() {
    return Resource.find();
  }
}

/**
 * Export resolver
 */

export default ResourceResolver;
