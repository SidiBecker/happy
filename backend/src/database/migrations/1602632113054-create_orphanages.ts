import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrphanages1602632113054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_orphanage',
        columns: [
          {
            name: 'id_orphanage',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'tx_name',
            type: 'varchar',
          },
          {
            name: 'nr_latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'nr_longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'tx_about',
            type: 'text',
          },
          {
            name: 'tx_instructions',
            type: 'text',
          },
          {
            name: 'fl_openonweekends',
            type: 'boolean',
          },
          {
            name: 'tx_openinghours',
            type: 'varchar',
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_orphanages');
  }
}
