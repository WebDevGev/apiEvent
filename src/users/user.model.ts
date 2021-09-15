import { ApiProperty } from "@nestjs/swagger";
import { DataTypes } from "sequelize";
import { Column, DataType, Table, Model} from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}


@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs > {
    @ApiProperty({example: '1', description: 'uniqe id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'user@gmail.com', description: 'Email adress'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Password'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'Gev', description: "User's name"})
    @Column({ type: DataType.STRING })
    name: string;

    @ApiProperty({example: 'true', description: 'organizator'})
    @Column({type: DataTypes.BOOLEAN, defaultValue: false})
    organizator: boolean

}