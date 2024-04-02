import { Injectable, CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EnvironmentHelper } from '@helpers/environment';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return EnvironmentHelper.allowProjectsCreation();
  }
}
