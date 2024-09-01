import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common'
import { Response } from 'express'
import { BaseError } from './base.error'
import { BaseErrorResponse } from './base-error.response'

@Catch(BaseError)
export class BaseErrorFilter implements ExceptionFilter {
    public catch(error: BaseError, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()

        response.status(200).json({
            success: false,
            error: new BaseErrorResponse({
                message: error.getMessage(),
                code: error.getCode()
            })
        })
    }
}