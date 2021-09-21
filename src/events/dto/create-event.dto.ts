import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean } from "class-validator";


export class CreateEventDto {

    @ApiProperty({example: 'Some Event', description: 'Event name'})
    @IsString()
    readonly title: string;

    @ApiProperty({example: '2021.12.31', description: 'Event time'})
    @IsString()
    readonly eventTime: string;

    @ApiProperty({example: 'Email', description: 'Event time'})
    @IsBoolean()
    readonly organizator: boolean
}
