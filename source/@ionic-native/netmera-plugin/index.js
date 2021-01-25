var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var NetmeraPluginOriginal = /** @class */ (function (_super) {
    __extends(NetmeraPluginOriginal, _super);
    function NetmeraPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetmeraPluginOriginal.prototype.start = function (netmeraKey, fcmKey) { return cordova(this, "start", {}, arguments); };
    NetmeraPluginOriginal.prototype.requestPushNotificationAuthorization = function () { return cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
    NetmeraPluginOriginal.prototype.subscribePushNotification = function () { return cordova(this, "subscribePushNotification", {}, arguments); };
    NetmeraPluginOriginal.prototype.subscribeOpenUrl = function () { return cordova(this, "subscribeOpenUrl", {}, arguments); };
    NetmeraPluginOriginal.prototype.subscribePushClick = function () { return cordova(this, "subscribePushClick", {}, arguments); };
    NetmeraPluginOriginal.prototype.subscribePushButtonClick = function () { return cordova(this, "subscribePushButtonClick", {}, arguments); };
    NetmeraPluginOriginal.prototype.sendEvent = function (event) { return cordova(this, "sendEvent", {}, arguments); };
    NetmeraPluginOriginal.prototype.fetchInboxUsingFilter = function (filter) { return cordova(this, "fetchInboxUsingFilter", {}, arguments); };
    NetmeraPluginOriginal.prototype.fetchNextPage = function () { return cordova(this, "fetchNextPage", {}, arguments); };
    NetmeraPluginOriginal.prototype.countForStatus = function (status) { return cordova(this, "countForStatus", {}, arguments); };
    NetmeraPluginOriginal.prototype.updatePushStatus = function (index, length, status) { return cordova(this, "updatePushStatus", {}, arguments); };
    NetmeraPluginOriginal.prototype.updateUser = function (user) { return cordova(this, "updateUser", {}, arguments); };
    NetmeraPluginOriginal.pluginName = "NetmeraPlugin";
    NetmeraPluginOriginal.plugin = "cordova-plugin-netmera";
    NetmeraPluginOriginal.pluginRef = "NetmeraPlugin";
    NetmeraPluginOriginal.repo = "";
    NetmeraPluginOriginal.install = "";
    NetmeraPluginOriginal.installVariables = [];
    NetmeraPluginOriginal.platforms = ["Android", "iOS"];
    return NetmeraPluginOriginal;
}(IonicNativePlugin));
var NetmeraPlugin = new NetmeraPluginOriginal();
export { NetmeraPlugin };
export var NetmeraPushStatus;
(function (NetmeraPushStatus) {
    NetmeraPushStatus[NetmeraPushStatus["undefiend"] = 0] = "undefiend";
    NetmeraPushStatus[NetmeraPushStatus["read"] = 1] = "read";
    NetmeraPushStatus[NetmeraPushStatus["unread"] = 2] = "unread";
    NetmeraPushStatus[NetmeraPushStatus["readAndUnread"] = 3] = "readAndUnread";
    NetmeraPushStatus[NetmeraPushStatus["deleted"] = 4] = "deleted";
    NetmeraPushStatus[NetmeraPushStatus["all"] = 7] = "all";
})(NetmeraPushStatus || (NetmeraPushStatus = {}));
var NetmeraUser = /** @class */ (function () {
    function NetmeraUser() {
    }
    Object.defineProperty(NetmeraUser.prototype, "setUserId", {
        set: function (value) { this.userId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "setEmail", {
        set: function (value) { this.email = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "setMsisdn", {
        set: function (value) { this.msisdn = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "name", {
        set: function (value) { this.pa = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "surname", {
        set: function (value) { this.pa = value; },
        enumerable: true,
        configurable: true
    });
    return NetmeraUser;
}());
export { NetmeraUser };
var NetmeraEvent = /** @class */ (function () {
    function NetmeraEvent() {
    }
    return NetmeraEvent;
}());
export { NetmeraEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldG1lcmEtcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWN6RixpQ0FBaUI7Ozs7SUFHbEQsNkJBQUssYUFBQyxVQUFrQixFQUFFLE1BQWM7SUFLeEMsNERBQW9DO0lBS3BDLGlEQUF5QjtJQUt6Qix3Q0FBZ0I7SUFLaEIsMENBQWtCO0lBS2xCLGdEQUF3QjtJQUt4QixpQ0FBUyxhQUFDLEtBQW1CO0lBSzdCLDZDQUFxQixhQUFDLE1BQTBCO0lBS2hELHFDQUFhO0lBS2Isc0NBQWMsYUFBQyxNQUF5QjtJQUt4Qyx3Q0FBZ0IsYUFBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQXlCO0lBS3pFLGtDQUFVLGFBQUMsSUFBaUI7Ozs7Ozs7O3dCQXBGOUI7RUEwQm1DLGlCQUFpQjtTQUF2QyxhQUFhO0FBc0YxQixNQUFNLENBQU4sSUFBWSxpQkFPWDtBQVBELFdBQVksaUJBQWlCO0lBQzNCLG1FQUFhLENBQUE7SUFDYix5REFBUSxDQUFBO0lBQ1IsNkRBQVUsQ0FBQTtJQUNWLDJFQUFpQixDQUFBO0lBQ2pCLCtEQUFXLENBQUE7SUFDWCx1REFBTyxDQUFBO0FBQ1QsQ0FBQyxFQVBXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFPNUI7Ozs7SUFVQyxzQkFBSSxrQ0FBUzthQUFiLFVBQWMsS0FBVSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEQsc0JBQUksaUNBQVE7YUFBWixVQUFhLEtBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2hELHNCQUFJLGtDQUFTO2FBQWIsVUFBYyxLQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRCxzQkFBSSw2QkFBSTthQUFSLFVBQVMsS0FBYSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDNUMsc0JBQUksZ0NBQU87YUFBWCxVQUFZLEtBQWEsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO3NCQXJJaEQ7Ozs7Ozt1QkFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmV0bWVyYVBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5ldG1lcmEnLFxuICBwbHVnaW5SZWY6ICdOZXRtZXJhUGx1Z2luJywgXG4gIHJlcG86ICcnLCBcbiAgaW5zdGFsbDogJycsIFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0bWVyYVBsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIHN0YXJ0KG5ldG1lcmFLZXk6IHN0cmluZywgZmNtS2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQdXNoTm90aWZpY2F0aW9uQXV0aG9yaXphdGlvbigpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHN1YnNjcmliZVB1c2hOb3RpZmljYXRpb24oKTogUHJvbWlzZTxOZXRtZXJhUHVzaD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3Vic2NyaWJlT3BlblVybCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3Vic2NyaWJlUHVzaENsaWNrKCk6IFByb21pc2U8TmV0bWVyYVB1c2g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHN1YnNjcmliZVB1c2hCdXR0b25DbGljaygpOiBQcm9taXNlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZW5kRXZlbnQoZXZlbnQ6IE5ldG1lcmFFdmVudCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hJbmJveFVzaW5nRmlsdGVyKGZpbHRlcjogTmV0bWVyYUluYm94RmlsdGVyKTogUHJvbWlzZTxOZXRtZXJhSW5ib3g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGZldGNoTmV4dFBhZ2UoKTogUHJvbWlzZTxOZXRtZXJhSW5ib3g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGNvdW50Rm9yU3RhdHVzKHN0YXR1czogTmV0bWVyYVB1c2hTdGF0dXMpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlUHVzaFN0YXR1cyhpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgc3RhdHVzOiBOZXRtZXJhUHVzaFN0YXR1cyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlVXNlcih1c2VyOiBOZXRtZXJhVXNlcik6IHZvaWQgeyB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhSW5ib3hGaWx0ZXIge1xuICBzdGF0dXM/OiBudW1iZXIsXG4gIHBhZ2VTaXplPzogbnVtYmVyLFxuICBjYXRlZ29yaWVzPzogc3RyaW5nW10sXG4gIGluY2x1ZGVFeHBpcmVkT2JqZWN0cz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhUHVzaCB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIHN1YnRpdGxlOiBzdHJpbmcsXG4gIGJvZHk6IHN0cmluZyxcbiAgcHVzaElkOiBzdHJpbmcsXG4gIHB1c2hJbnN0YW5jZUlkOiBzdHJpbmcsXG4gIHB1c2hUeXBlOiBudW1iZXJcbiAgaW5ib3hTdGF0dXM6IG51bWJlcixcbiAgc2VuZERhdGU6IGFueVxuICBkZWVwbGlua1VybDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0bWVyYUluYm94IHtcbiAgaGFzTmV4dFBhZ2U6IGJvb2xlYW4sXG4gIGluYm94OiBOZXRtZXJhUHVzaFtdXG59XG5cbmV4cG9ydCBlbnVtIE5ldG1lcmFQdXNoU3RhdHVzIHtcbiAgdW5kZWZpZW5kID0gMCxcbiAgcmVhZCA9IDEsXG4gIHVucmVhZCA9IDIsXG4gIHJlYWRBbmRVbnJlYWQgPSAzLFxuICBkZWxldGVkID0gNCxcbiAgYWxsID0gN1xufVxuXG5leHBvcnQgY2xhc3MgTmV0bWVyYVVzZXIge1xuXG4gIHByaXZhdGUgdXNlcklkOiBhbnk7XG4gIHByaXZhdGUgbXNpc2RuOiBhbnk7XG4gIHByaXZhdGUgZW1haWw6IGFueTtcbiAgcHJpdmF0ZSBwYTogYW55O1xuICBwcml2YXRlIHBiOiBhbnk7XG5cbiAgc2V0IHNldFVzZXJJZCh2YWx1ZTogYW55KSB7IHRoaXMudXNlcklkID0gdmFsdWU7IH1cbiAgc2V0IHNldEVtYWlsKHZhbHVlOiBhbnkpIHsgdGhpcy5lbWFpbCA9IHZhbHVlOyB9XG4gIHNldCBzZXRNc2lzZG4odmFsdWU6IGFueSkgeyB0aGlzLm1zaXNkbiA9IHZhbHVlOyB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5wYSA9IHZhbHVlOyB9XG4gIHNldCBzdXJuYW1lKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5wYSA9IHZhbHVlIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldG1lcmFFdmVudCB7IH0iXX0=