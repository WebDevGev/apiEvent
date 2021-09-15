import { DataTypes } from "sequelize";
import { Column, DataType, Table, Model} from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}


@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs > {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;
    @Column({ type: DataType.STRING })
    name: string;
    @Column({type: DataTypes.BOOLEAN, defaultValue: false})
    admin: boolean

}