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
    NetmeraPluginOriginal.prototype.start = function (netmeraKey) { return cordova(this, "start", {}, arguments); };
    NetmeraPluginOriginal.prototype.requestPushNotificationAuthorization = function () { return cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
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
    return NetmeraUser;
}());
export { NetmeraUser };
var NetmeraEvent = /** @class */ (function () {
    function NetmeraEvent() {
    }
    return NetmeraEvent;
}());
export { NetmeraEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldG1lcmEtcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWtDekYsaUNBQWlCOzs7O0lBR2xELDZCQUFLLGFBQUMsVUFBa0I7SUFLeEIsNERBQW9DO0lBS3BDLGlDQUFTLGFBQUMsS0FBbUI7SUFLN0IsNkNBQXFCLGFBQUMsTUFBMEI7SUFLaEQscUNBQWE7SUFLYixzQ0FBYyxhQUFDLE1BQXlCO0lBS3hDLHdDQUFnQixhQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsTUFBeUI7SUFLekUsa0NBQVUsYUFBQyxJQUFpQjs7Ozs7Ozs7d0JBcEY5QjtFQThDbUMsaUJBQWlCO1NBQXZDLGFBQWE7QUFpRTFCLE1BQU0sQ0FBTixJQUFZLGlCQU9YO0FBUEQsV0FBWSxpQkFBaUI7SUFDM0IsbUVBQWEsQ0FBQTtJQUNiLHlEQUFRLENBQUE7SUFDUiw2REFBVSxDQUFBO0lBQ1YsMkVBQWlCLENBQUE7SUFDakIsK0RBQVcsQ0FBQTtJQUNYLHVEQUFPLENBQUE7QUFDVCxDQUFDLEVBUFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQU81Qjs7OztJQVNDLHNCQUFJLGtDQUFTO2FBQWIsVUFBYyxLQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRCxzQkFBSSxpQ0FBUTthQUFaLFVBQWEsS0FBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDaEQsc0JBQUksa0NBQVM7YUFBYixVQUFjLEtBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xELHNCQUFJLDZCQUFJO2FBQVIsVUFBUyxLQUFhLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtzQkFsSTlDOzs7Ozs7dUJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBOZXRtZXJhIFBsdWdpblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmV0bWVyYVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0bWVyYS1wbHVnaW4nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldG1lcmFQbHVnaW46IE5ldG1lcmFQbHVnaW4pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLm5ldG1lcmFQbHVnaW4uZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOZXRtZXJhUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0bWVyYScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdOZXRtZXJhUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0bWVyYVBsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIHN0YXJ0KG5ldG1lcmFLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQdXNoTm90aWZpY2F0aW9uQXV0aG9yaXphdGlvbigpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZW5kRXZlbnQoZXZlbnQ6IE5ldG1lcmFFdmVudCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hJbmJveFVzaW5nRmlsdGVyKGZpbHRlcjogTmV0bWVyYUluYm94RmlsdGVyKTogUHJvbWlzZTxOZXRtZXJhSW5ib3g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGZldGNoTmV4dFBhZ2UoKTogUHJvbWlzZTxOZXRtZXJhSW5ib3g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGNvdW50Rm9yU3RhdHVzKHN0YXR1czogTmV0bWVyYVB1c2hTdGF0dXMpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlUHVzaFN0YXR1cyhpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgc3RhdHVzOiBOZXRtZXJhUHVzaFN0YXR1cyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlVXNlcih1c2VyOiBOZXRtZXJhVXNlcik6IHZvaWQgeyB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhSW5ib3hGaWx0ZXIge1xuICBzdGF0dXM/OiBudW1iZXIsXG4gIHBhZ2VTaXplPzogbnVtYmVyLFxuICBjYXRlZ29yaWVzPzogc3RyaW5nW10sXG4gIGluY2x1ZGVFeHBpcmVkT2JqZWN0cz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhUHVzaCB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIHN1YnRpdGxlOiBzdHJpbmcsXG4gIGJvZHk6IHN0cmluZyxcbiAgcHVzaElkOiBzdHJpbmcsXG4gIHB1c2hJbnN0YW5jZUlkOiBzdHJpbmcsXG4gIHB1c2hUeXBlOiBudW1iZXJcbiAgaW5ib3hTdGF0dXM6IG51bWJlcixcbiAgc2VuZERhdGU6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFJbmJveCB7XG4gIGhhc05leHRQYWdlOiBib29sZWFuLFxuICBpbmJveDogTmV0bWVyYVB1c2hbXVxufVxuXG5leHBvcnQgZW51bSBOZXRtZXJhUHVzaFN0YXR1cyB7XG4gIHVuZGVmaWVuZCA9IDAsXG4gIHJlYWQgPSAxLFxuICB1bnJlYWQgPSAyLFxuICByZWFkQW5kVW5yZWFkID0gMyxcbiAgZGVsZXRlZCA9IDQsXG4gIGFsbCA9IDdcbn1cblxuZXhwb3J0IGNsYXNzIE5ldG1lcmFVc2VyIHtcblxuICB1c2VySWQ6IGFueTtcbiAgbXNpc2RuOiBhbnk7XG4gIGVtYWlsOiBhbnk7XG4gIHBhOiBhbnk7XG5cbiAgc2V0IHNldFVzZXJJZCh2YWx1ZTogYW55KSB7IHRoaXMudXNlcklkID0gdmFsdWU7IH1cbiAgc2V0IHNldEVtYWlsKHZhbHVlOiBhbnkpIHsgdGhpcy5lbWFpbCA9IHZhbHVlOyB9XG4gIHNldCBzZXRNc2lzZG4odmFsdWU6IGFueSkgeyB0aGlzLm1zaXNkbiA9IHZhbHVlOyB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5wYSA9IHZhbHVlOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXRtZXJhRXZlbnQgeyB9Il19