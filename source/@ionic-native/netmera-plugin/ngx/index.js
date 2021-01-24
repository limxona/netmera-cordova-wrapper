import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var NetmeraPlugin = /** @class */ (function (_super) {
    __extends(NetmeraPlugin, _super);
    function NetmeraPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetmeraPlugin.prototype.start = function (netmeraKey) { return cordova(this, "start", {}, arguments); };
    NetmeraPlugin.prototype.requestPushNotificationAuthorization = function () { return cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
    NetmeraPlugin.prototype.sendEvent = function (event) { return cordova(this, "sendEvent", {}, arguments); };
    NetmeraPlugin.prototype.fetchInboxUsingFilter = function (filter) { return cordova(this, "fetchInboxUsingFilter", {}, arguments); };
    NetmeraPlugin.prototype.fetchNextPage = function () { return cordova(this, "fetchNextPage", {}, arguments); };
    NetmeraPlugin.prototype.countForStatus = function (status) { return cordova(this, "countForStatus", {}, arguments); };
    NetmeraPlugin.prototype.updatePushStatus = function (index, length, status) { return cordova(this, "updatePushStatus", {}, arguments); };
    NetmeraPlugin.prototype.updateUser = function (user) { return cordova(this, "updateUser", {}, arguments); };
    NetmeraPlugin.pluginName = "NetmeraPlugin";
    NetmeraPlugin.plugin = "cordova-plugin-netmera";
    NetmeraPlugin.pluginRef = "NetmeraPlugin";
    NetmeraPlugin.repo = "";
    NetmeraPlugin.install = "";
    NetmeraPlugin.installVariables = [];
    NetmeraPlugin.platforms = ["Android", "iOS"];
    NetmeraPlugin = __decorate([
        Injectable()
    ], NetmeraPlugin);
    return NetmeraPlugin;
}(IonicNativePlugin));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldG1lcmEtcGx1Z2luL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUFrQ3pGLGlDQUFpQjs7OztJQUdsRCw2QkFBSyxhQUFDLFVBQWtCO0lBS3hCLDREQUFvQztJQUtwQyxpQ0FBUyxhQUFDLEtBQW1CO0lBSzdCLDZDQUFxQixhQUFDLE1BQTBCO0lBS2hELHFDQUFhO0lBS2Isc0NBQWMsYUFBQyxNQUF5QjtJQUt4Qyx3Q0FBZ0IsYUFBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQXlCO0lBS3pFLGtDQUFVLGFBQUMsSUFBaUI7Ozs7Ozs7O0lBdENqQixhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBOUMxQjtFQThDbUMsaUJBQWlCO1NBQXZDLGFBQWE7QUFpRTFCLE1BQU0sQ0FBTixJQUFZLGlCQU9YO0FBUEQsV0FBWSxpQkFBaUI7SUFDM0IsbUVBQWEsQ0FBQTtJQUNiLHlEQUFRLENBQUE7SUFDUiw2REFBVSxDQUFBO0lBQ1YsMkVBQWlCLENBQUE7SUFDakIsK0RBQVcsQ0FBQTtJQUNYLHVEQUFPLENBQUE7QUFDVCxDQUFDLEVBUFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQU81Qjs7OztJQVNDLHNCQUFJLGtDQUFTO2FBQWIsVUFBYyxLQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRCxzQkFBSSxpQ0FBUTthQUFaLFVBQWEsS0FBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDaEQsc0JBQUksa0NBQVM7YUFBYixVQUFjLEtBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xELHNCQUFJLDZCQUFJO2FBQVIsVUFBUyxLQUFhLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtzQkFsSTlDOzs7Ozs7dUJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBOZXRtZXJhIFBsdWdpblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmV0bWVyYVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0bWVyYS1wbHVnaW4nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldG1lcmFQbHVnaW46IE5ldG1lcmFQbHVnaW4pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLm5ldG1lcmFQbHVnaW4uZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOZXRtZXJhUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0bWVyYScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdOZXRtZXJhUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0bWVyYVBsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIHN0YXJ0KG5ldG1lcmFLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQdXNoTm90aWZpY2F0aW9uQXV0aG9yaXphdGlvbigpOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZW5kRXZlbnQoZXZlbnQ6IE5ldG1lcmFFdmVudCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hJbmJveFVzaW5nRmlsdGVyKGZpbHRlcjogTmV0bWVyYUluYm94RmlsdGVyKTogUHJvbWlzZTxOZXRtZXJhSW5ib3g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGZldGNoTmV4dFBhZ2UoKTogUHJvbWlzZTxOZXRtZXJhSW5ib3g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGNvdW50Rm9yU3RhdHVzKHN0YXR1czogTmV0bWVyYVB1c2hTdGF0dXMpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlUHVzaFN0YXR1cyhpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgc3RhdHVzOiBOZXRtZXJhUHVzaFN0YXR1cyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlVXNlcih1c2VyOiBOZXRtZXJhVXNlcik6IHZvaWQgeyB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhSW5ib3hGaWx0ZXIge1xuICBzdGF0dXM/OiBudW1iZXIsXG4gIHBhZ2VTaXplPzogbnVtYmVyLFxuICBjYXRlZ29yaWVzPzogc3RyaW5nW10sXG4gIGluY2x1ZGVFeHBpcmVkT2JqZWN0cz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhUHVzaCB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIHN1YnRpdGxlOiBzdHJpbmcsXG4gIGJvZHk6IHN0cmluZyxcbiAgcHVzaElkOiBzdHJpbmcsXG4gIHB1c2hJbnN0YW5jZUlkOiBzdHJpbmcsXG4gIHB1c2hUeXBlOiBudW1iZXJcbiAgaW5ib3hTdGF0dXM6IG51bWJlcixcbiAgc2VuZERhdGU6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFJbmJveCB7XG4gIGhhc05leHRQYWdlOiBib29sZWFuLFxuICBpbmJveDogTmV0bWVyYVB1c2hbXVxufVxuXG5leHBvcnQgZW51bSBOZXRtZXJhUHVzaFN0YXR1cyB7XG4gIHVuZGVmaWVuZCA9IDAsXG4gIHJlYWQgPSAxLFxuICB1bnJlYWQgPSAyLFxuICByZWFkQW5kVW5yZWFkID0gMyxcbiAgZGVsZXRlZCA9IDQsXG4gIGFsbCA9IDdcbn1cblxuZXhwb3J0IGNsYXNzIE5ldG1lcmFVc2VyIHtcblxuICB1c2VySWQ6IGFueTtcbiAgbXNpc2RuOiBhbnk7XG4gIGVtYWlsOiBhbnk7XG4gIHBhOiBhbnk7XG5cbiAgc2V0IHNldFVzZXJJZCh2YWx1ZTogYW55KSB7IHRoaXMudXNlcklkID0gdmFsdWU7IH1cbiAgc2V0IHNldEVtYWlsKHZhbHVlOiBhbnkpIHsgdGhpcy5lbWFpbCA9IHZhbHVlOyB9XG4gIHNldCBzZXRNc2lzZG4odmFsdWU6IGFueSkgeyB0aGlzLm1zaXNkbiA9IHZhbHVlOyB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5wYSA9IHZhbHVlOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXRtZXJhRXZlbnQgeyB9Il19