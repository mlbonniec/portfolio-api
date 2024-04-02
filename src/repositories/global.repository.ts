import { Primary } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mongodb';

export class GlobalRepository<T extends object> extends EntityRepository<T> {
  /**
   * Add an entity in the database
   * @param {object} entity The entity to add
   * @returns {Promise<Primary<object>>} The added entity
   */
  async add(entity: T): Promise<Primary<T>> {
    return await this.em.insert<T>(entity);
  }

  /**
   * Delete an entity from the database
   * @param {object} entity The entity to delete
   * @returns {Promise<void>} Nothing
   */
  async delete(entity: T): Promise<void> {
    await this.em.removeAndFlush(entity);
  }
}
