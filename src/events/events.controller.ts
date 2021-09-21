import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Event } from './entities/event.entity';

@ApiTags('Events')

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiOperation({summary: 'Creating an event'})
  @ApiResponse({status: 200, type: Event})
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @ApiOperation({summary: 'Get all events'})
  @ApiResponse({status: 200})
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @ApiOperation({summary: 'Get an event'})
  @ApiResponse({status: 200, type: Event})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @ApiOperation({summary: 'Update an event'})
  @ApiResponse({status: 200, type: Event})
  @Patch(':id')
  update(@Param('id') id: string, @Body() event: Event) {
    return this.eventsService.update(+id, event);
  }

  @ApiOperation({summary: 'Delete an event'})
  @ApiResponse({status: 200})
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eventsService.delete(+id);
  }
}
