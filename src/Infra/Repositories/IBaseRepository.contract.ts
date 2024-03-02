export type IBaseRepositoryContract<Entity, Update> = {
  create(entity: Entity): Promise<Entity>;
  getById(id: string): Promise<Entity>;
  getAll(): Promise<Entity>;
};
