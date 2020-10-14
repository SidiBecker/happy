import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createImage1602635136012 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_image',
        columns: [
          {
            name: 'id_image',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'tx_path',
            type: 'varchar',
          },
          {
            name: 'cd_orphanage',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'image_orphanage_fk',
            columnNames: ['cd_orphanage'],
            referencedTableName: 'tb_orphanage',
            referencedColumnNames: ['id_orphanage'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('tb_image');
  }
}
