type EntityId = string

type EntityBase = {
  id: EntityId
}

type EntityUpdate<Entity extends EntityBase> = Required<Pick<Entity, 'id'>> & Partial<Omit<Entity, 'id'>>

type EntitiesRecord<Entity extends EntityBase> = Record<EntityId, Entity>

type EntitiesMap<Entity extends EntityBase> = Map<EntityId, Entity>
