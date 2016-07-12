import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { ALFRESCO_CORE_PROVIDERS } from 'ng2-alfresco-core';
import { ALFRESCO_SEARCH_PROVIDERS } from 'ng2-alfresco-search';
import { UploadService } from 'ng2-alfresco-upload';

bootstrap(AppComponent, [
  UploadService,
  HTTP_PROVIDERS,
  ALFRESCO_SEARCH_PROVIDERS,
  ALFRESCO_CORE_PROVIDERS
]);
