import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Netmera Plugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { NetmeraPlugin } from '@ionic-native/netmera-plugin';
 *
 *
 * constructor(private netmeraPlugin: NetmeraPlugin) { }
 *
 * ...
 *
 *
 * this.netmeraPlugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class NetmeraPlugin extends IonicNativePlugin {
    start(netmeraKey: string): void;
    requestPushNotificationAuthorization(): void;
    sendEvent(event: NetmeraEvent): void;
    fetchInboxUsingFilter(filter: NetmeraInboxFilter): Promise<NetmeraInbox>;
    fetchNextPage(): Promise<NetmeraInbox>;
    countForStatus(status: NetmeraPushStatus): Promise<number>;
    updatePushStatus(index: number, length: number, status: NetmeraPushStatus): Promise<boolean>;
    updateUser(user: NetmeraUser): void;
}
export interface NetmeraInboxFilter {
    status?: number;
    pageSize?: number;
    categories?: string[];
    includeExpiredObjects?: boolean;
}
export interface NetmeraPush {
    title: string;
    subtitle: string;
    body: string;
    pushId: string;
    pushInstanceId: string;
    pushType: number;
    inboxStatus: number;
    sendDate: any;
}
export interface NetmeraInbox {
    hasNextPage: boolean;
    inbox: NetmeraPush[];
}
export declare enum NetmeraPushStatus {
    undefiend = 0,
    read = 1,
    unread = 2,
    readAndUnread = 3,
    deleted = 4,
    all = 7
}
export declare class NetmeraUser {
    userId: any;
    msisdn: any;
    email: any;
    pa: any;
    set setUserId(value: any);
    set setEmail(value: any);
    set setMsisdn(value: any);
    set name(value: string);
}
export declare class NetmeraEvent {
}
