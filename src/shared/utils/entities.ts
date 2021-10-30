/* eslint-disable no-param-reassign */
import { produce } from 'immer'

import { generateUniqueString } from './strings'
import { filterUndefinedObjectValues } from './objects'

export const generateEntityId = (): EntityId => {
  return generateUniqueString('id')
}

export const getEntitiesFromRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entityIds: EntityId[]
): Entity[] => {
  return entityIds.map((entityId) => record[entityId]).filter((entity): entity is Entity => entity !== undefined)
}

export const getEntitiesFromMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entityIds: EntityId[]
): Entity[] => {
  return entityIds.map((entityId) => map.get(entityId)).filter((entity): entity is Entity => entity !== undefined)
}

const addEntityToRecord = <Entity extends EntityBase>(record: EntitiesRecord<Entity>, entity: Entity): void => {
  record[entity.id] = entity
}

const addEntitiesToRecord = <Entity extends EntityBase>(record: EntitiesRecord<Entity>, entities: Entity[]): void => {
  entities.forEach((entity) => addEntityToRecord(record, entity))
}

export const addEntityToIRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entity: Entity
): EntitiesRecord<Entity> => {
  return produce<EntitiesRecord<Entity>, EntitiesRecord<Entity>>(record, (draftRecord) => {
    return addEntityToRecord(draftRecord, entity)
  })
}

export const addEntitiesToIRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entities: Entity[]
): EntitiesRecord<Entity> => {
  return produce<EntitiesRecord<Entity>, EntitiesRecord<Entity>>(record, (draftRecord) => {
    return addEntitiesToRecord(draftRecord, entities)
  })
}

const updateEntityInRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entityUpdate: EntityUpdate<Entity>
): void => {
  const entity = record[entityUpdate.id]
  if (entity) {
    const updatedEntity: Entity = { ...entity, ...filterUndefinedObjectValues(entityUpdate) }
    record[updatedEntity.id] = updatedEntity
  }
}

const updateEntitiesInRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entitiesUpdate: EntityUpdate<Entity>[]
): void => {
  entitiesUpdate.forEach((entityUpdate) => updateEntityInRecord(record, entityUpdate))
}

export const updateEntityInIRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entityUpdate: EntityUpdate<Entity>
): EntitiesRecord<Entity> => {
  return produce<EntitiesRecord<Entity>, EntitiesRecord<Entity>>(record, (draftRecord) => {
    updateEntityInRecord(draftRecord, entityUpdate)
  })
}

export const updateEntitiesInIRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entitiesUpdate: EntityUpdate<Entity>[]
): EntitiesRecord<Entity> => {
  return produce<EntitiesRecord<Entity>, EntitiesRecord<Entity>>(record, (draftRecord) => {
    updateEntitiesInRecord(draftRecord, entitiesUpdate)
  })
}

const removeEntityFromRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entityId: EntityId
): void => {
  delete record[entityId]
}

const removeEntitiesFromRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entityIds: EntityId[]
): void => {
  entityIds.forEach((entityId) => removeEntityFromRecord(record, entityId))
}

export const removeEntityFromIRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entityId: EntityId
): EntitiesRecord<Entity> => {
  return produce(record, (draftRecord) => removeEntityFromRecord(draftRecord, entityId))
}

export const removeEntitiesFromIRecord = <Entity extends EntityBase>(
  record: EntitiesRecord<Entity>,
  entityIds: EntityId[]
): EntitiesRecord<Entity> => {
  return produce(record, (draftRecord) => removeEntitiesFromRecord(draftRecord, entityIds))
}

const addEntityToMap = <Entity extends EntityBase>(map: EntitiesMap<Entity>, entity: Entity): void => {
  map.set(entity.id, entity)
}

const addEntitiesToMap = <Entity extends EntityBase>(map: EntitiesMap<Entity>, entities: Entity[]): void => {
  entities.forEach((entity) => addEntityToMap(map, entity))
}

export const addEntityToIMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entity: Entity
): EntitiesMap<Entity> => {
  return produce<EntitiesMap<Entity>, EntitiesMap<Entity>>(map, (draftMap) => addEntityToMap(draftMap, entity))
}

export const addEntitiesToIMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entities: Entity[]
): EntitiesMap<Entity> => {
  return produce<EntitiesMap<Entity>, EntitiesMap<Entity>>(map, (draftMap) => addEntitiesToMap(draftMap, entities))
}

const updateEntityInMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entityUpdate: EntityUpdate<Entity>
): void => {
  const entity = map.get(entityUpdate.id)
  if (entity) {
    const updatedEntity: Entity = { ...entity, ...filterUndefinedObjectValues(entityUpdate) }
    map.set(updatedEntity.id, updatedEntity)
  }
}

const updateEntitiesInMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entitiesUpdate: EntityUpdate<Entity>[]
): void => {
  entitiesUpdate.forEach((entityUpdate) => updateEntityInMap(map, entityUpdate))
}

export const updateEntityInIMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entityUpdate: EntityUpdate<Entity>
): EntitiesMap<Entity> => {
  return produce<EntitiesMap<Entity>, EntitiesMap<Entity>>(map, (draftMap) => {
    updateEntityInMap(draftMap, entityUpdate)
  })
}

export const updateEntitiesInIMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entitiesUpdate: EntityUpdate<Entity>[]
): EntitiesMap<Entity> => {
  return produce<EntitiesMap<Entity>, EntitiesMap<Entity>>(map, (draftMap) => {
    updateEntitiesInMap(draftMap, entitiesUpdate)
  })
}

const removeEntityFromMap = <Entity extends EntityBase>(map: EntitiesMap<Entity>, entityId: EntityId): void => {
  map.delete(entityId)
}

const removeEntitiesFromMap = <Entity extends EntityBase>(map: EntitiesMap<Entity>, entityIds: EntityId[]): void => {
  entityIds.forEach((entityId) => removeEntityFromMap(map, entityId))
}

export const removeEntityFromIMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entityId: EntityId
): EntitiesMap<Entity> => {
  return produce(map, (draftMap) => removeEntityFromMap(draftMap, entityId))
}

export const removeEntitiesFromIMap = <Entity extends EntityBase>(
  map: EntitiesMap<Entity>,
  entityIds: EntityId[]
): EntitiesMap<Entity> => {
  return produce(map, (draftMap) => removeEntitiesFromMap(draftMap, entityIds))
}

/* eslint-enable no-param-reassign */
