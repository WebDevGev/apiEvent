import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean } from "class-validator";
import { User } from "src/users/entities/user.entity";


export class CreateEventDto {

    @ApiProperty({example: 'Some Event', description: 'Event name'})
    @IsString()
    readonly title: string;

    @ApiProperty({example: '2021.12.31', description: 'Event time'})
    @IsString()
    readonly eventTime: string;

    @ApiProperty({example: true, description: 'Boolean value'})
    @IsBoolean()
    readonly organizator: boolean

    @ApiProperty({})
    readonly partisipants: User [];
}
