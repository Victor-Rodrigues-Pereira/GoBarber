import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export default class AddAvatarFieldToUsers1606834549175 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', 
        new TableColumn({
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
        }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'avatar');
    }

}
