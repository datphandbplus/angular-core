import { InjectionToken } from '@angular/core';

export const DEFAULT_EXPIRE_DAYS: InjectionToken<number> = new InjectionToken<number>( 'defaultExpireDays' );
export const DEFAULT_STORAGE_HASH_KEY: InjectionToken<string> = new InjectionToken<string>( 'defaultStorageHashKey' );
export const DEFAULT_AUTHORIZED_KEY: InjectionToken<string> = new InjectionToken<string>( 'defaultAuthorizedKey' );
export const DEFAULT_FCM_PUBLIC_KEY: InjectionToken<string> = new InjectionToken<string>( 'defaultFcmPublicKey' );
export const DEFAULT_SERVER_API_URL: InjectionToken<string> = new InjectionToken<string>( 'defaultServerApiURL' );
export const DEFAULT_SERVER_WEBSOCKET_URL: InjectionToken<string> = new InjectionToken<string>( 'defaultServerWSURL' );
export const DEFAULT_APP_NAME: InjectionToken<string> = new InjectionToken<string>( 'defaultAppName' );
export const DEFAULT_APP_LOGO: InjectionToken<string> = new InjectionToken<string>( 'defaultAppLogo' );
export const DEFAULT_APP_URL: InjectionToken<string> = new InjectionToken<string>( 'defaultAppURL' );
export const DEFAULT_TIMEZONE: InjectionToken<string> = new InjectionToken<string>( 'defaultTimezone' );
export const DEFAULT_LOCALE: InjectionToken<string> = new InjectionToken<string>( 'defaultLocale' );
