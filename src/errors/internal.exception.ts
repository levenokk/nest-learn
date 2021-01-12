import { HttpException, HttpStatus } from '@nestjs/common';

export class InternalException extends HttpException {
  constructor() {
    super('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
